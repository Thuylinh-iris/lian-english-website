"use client";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function SpeakingSection() {
  const router = useRouter();
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(60);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isAssessing, setIsAssessing] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState<any>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const countdownRef = useRef<NodeJS.Timeout | null>(null);

  const speakingTask = {
    prompt: "Think of a close friend. How did you meet? Describe his or her personality, and talk about what you like most about him/her.",
    task: "Describe a friend"
  };

  useEffect(() => {
    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
      if (audioURL) {
        URL.revokeObjectURL(audioURL);
      }
    };
  }, [audioURL]);

  const startRecording = async () => {
    try {
      setPermissionDenied(false);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        setAudioBlob(audioBlob);
        setRecordingComplete(true);
        
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setCountdown(60);

      countdownRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            stopRecording();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

    } catch (error) {
      console.error('Error accessing microphone:', error);
      setPermissionDenied(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
    }
  };

  const handleRetake = () => {
    setRecordingComplete(false);
    setAudioURL(null);
    setAudioBlob(null);
    setCountdown(60);
    setAssessmentResult(null);
    localStorage.removeItem('speakingRecording');
    localStorage.removeItem('speakingAssessment');
  };

  const handleAssess = async () => {
    if (!audioBlob) return;

    setIsAssessing(true);

    try {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.webm');
      formData.append('prompt', speakingTask.prompt);
      formData.append('task', speakingTask.task);

      const response = await fetch('/api/assess-speaking', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setAssessmentResult(result.assessment);
        // Save to localStorage
        localStorage.setItem('speakingAssessment', JSON.stringify(result.assessment));
        localStorage.setItem('speakingTranscription', result.assessment.transcription);
      } else {
        alert('Assessment failed: ' + result.error);
      }
    } catch (error) {
      console.error('Error assessing speaking:', error);
      alert('Failed to assess speaking. Please try again.');
    } finally {
      setIsAssessing(false);
    }
  };

  const handleContinue = () => {
    router.push("/test/email-capture");
  };

  const handleSkip = () => {
    router.push("/test/email-capture");
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{ fontSize: "2rem", color: "#0F2039", marginBottom: "20px" }}
      >
        Speaking Section (Optional)
      </h1>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          marginBottom: "30px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#0F2039" }}>Task: {speakingTask.task}</h3>
        <p style={{ marginBottom: "20px", color: "#5A6C7D", lineHeight: "1.6" }}>
          {speakingTask.prompt}
        </p>
        <p style={{ fontSize: "0.9rem", color: "#B8860B", marginBottom: "20px" }}>
          Duration: Maximum 60 seconds
        </p>

        {permissionDenied && (
          <div style={{ padding: "15px", background: "#fef2f2", borderRadius: "8px", marginBottom: "20px" }}>
            <p style={{ color: "#991b1b", margin: 0 }}>
              ⚠️ Microphone access denied. Please allow microphone access to record your speaking sample.
            </p>
          </div>
        )}

        {!recordingComplete && !isRecording && (
          <button
            onClick={startRecording}
            style={{
              padding: "15px 30px",
              background: "#B8860B",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            🎤 Start Recording
          </button>
        )}

        {isRecording && (
          <div>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "#ef4444",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                animation: "pulse 1.5s infinite",
              }}
            >
              <span style={{ color: "white", fontSize: "24px" }}>🎙️</span>
            </div>
            <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#ef4444", marginBottom: "20px" }}>
              {countdown}s
            </p>
            <button
              onClick={stopRecording}
              style={{
                padding: "12px 30px",
                background: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              ⏹️ Stop Recording
            </button>
          </div>
        )}

        {recordingComplete && audioURL && !assessmentResult && (
          <div>
            <p style={{ color: "#10b981", marginBottom: "15px", fontWeight: "600" }}>
              ✅ Recording Complete!
            </p>
            <audio controls src={audioURL} style={{ width: "100%", marginBottom: "20px" }} />
            
            <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={handleRetake}
                style={{
                  padding: "12px 30px",
                  background: "#5A6C7D",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                🔄 Retake
              </button>
              <button
                onClick={handleAssess}
                disabled={isAssessing}
                style={{
                  padding: "12px 30px",
                  background: isAssessing ? "#9ca3af" : "#B8860B",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: isAssessing ? "not-allowed" : "pointer",
                }}
              >
                {isAssessing ? "⏳ Assessing..." : "🤖 Get AI Assessment"}
              </button>
              <button
                onClick={handleContinue}
                style={{
                  padding: "12px 30px",
                  background: "#10b981",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {assessmentResult && (
          <div style={{ marginTop: "30px", textAlign: "left" }}>
            <h3 style={{ color: "#0F2039", marginBottom: "20px", textAlign: "center" }}>
              🎯 AI Assessment Results
            </h3>
            
            <div style={{ 
              background: "#f0fdf4", 
              padding: "20px", 
              borderRadius: "8px", 
              marginBottom: "20px",
              border: "2px solid #10b981"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                <span style={{ fontSize: "1.2rem", fontWeight: "600", color: "#0F2039" }}>
                  Level: {assessmentResult.level}
                </span>
                <span style={{ fontSize: "1.5rem", fontWeight: "700", color: "#10b981" }}>
                  Score: {assessmentResult.score}/100
                </span>
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ color: "#0F2039", marginBottom: "10px" }}>📝 What you said:</h4>
              <p style={{ 
                background: "#f8f9fa", 
                padding: "15px", 
                borderRadius: "8px",
                fontStyle: "italic",
                color: "#5A6C7D"
              }}>
                "{assessmentResult.transcription}"
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ color: "#0F2039", marginBottom: "15px" }}>📊 Detailed Feedback:</h4>
              <div style={{ display: "grid", gap: "10px" }}>
                <div style={{ background: "#f8f9fa", padding: "12px", borderRadius: "8px" }}>
                  <strong style={{ color: "#B8860B" }}>Fluency:</strong> {assessmentResult.feedback.fluency}
                </div>
                <div style={{ background: "#f8f9fa", padding: "12px", borderRadius: "8px" }}>
                  <strong style={{ color: "#B8860B" }}>Grammar:</strong> {assessmentResult.feedback.grammar}
                </div>
                <div style={{ background: "#f8f9fa", padding: "12px", borderRadius: "8px" }}>
                  <strong style={{ color: "#B8860B" }}>Vocabulary:</strong> {assessmentResult.feedback.vocabulary}
                </div>
                <div style={{ background: "#f8f9fa", padding: "12px", borderRadius: "8px" }}>
                  <strong style={{ color: "#B8860B" }}>Pronunciation:</strong> {assessmentResult.feedback.pronunciation}
                </div>
              </div>
            </div>

            <div style={{ 
              background: "#fff8e1", 
              padding: "15px", 
              borderRadius: "8px",
              border: "2px solid #B8860B"
            }}>
              <strong style={{ color: "#B8860B" }}>💡 Overall Feedback:</strong>
              <p style={{ marginTop: "10px", color: "#0F2039" }}>
                {assessmentResult.overallFeedback}
              </p>
            </div>

            <div style={{ marginTop: "20px", display: "flex", gap: "15px", justifyContent: "center" }}>
              <button
                onClick={handleRetake}
                style={{
                  padding: "12px 30px",
                  background: "#5A6C7D",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                🔄 Retake
              </button>
              <button
                onClick={handleContinue}
                style={{
                  padding: "12px 30px",
                  background: "#10b981",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Continue →
              </button>
            </div>
          </div>
        )}
      </div>

      {!recordingComplete && (
        <button
          onClick={handleSkip}
          style={{
            padding: "12px 30px",
            background: "transparent",
            color: "#5A6C7D",
            border: "1px solid #5A6C7D",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Skip Speaking →
        </button>
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
