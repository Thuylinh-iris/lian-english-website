import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'submissions.json');

export interface TestSubmission {
  id: string;
  referenceCode: string;
  studentName: string;
  studentEmail: string;
  level: string;
  levelName: string;
  score: number;
  totalQuestions: number;
  recommendedClass: string;
  duration: string;
  startDate: string;
  generalTestBreakdown?: {
    listening: number;
    grammar: number;
    vocabulary: number;
    reading: number;
  };
  speakingAssessment?: {
    level: string;
    score: number;
    feedback: string;
  };
  writingAssessment?: {
    level: string;
    score: number;
    feedback: string;
  };
  createdAt: string;
  status: 'pending' | 'reviewed' | 'contacted' | 'enrolled';
}

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.dirname(DB_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read all submissions from JSON file
function readSubmissions(): TestSubmission[] {
  ensureDataDir();

  if (!fs.existsSync(DB_PATH)) {
    return [];
  }

  try {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading submissions:', error);
    return [];
  }
}

// Write all submissions to JSON file
function writeSubmissions(submissions: TestSubmission[]): void {
  ensureDataDir();

  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(submissions, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing submissions:', error);
    throw error;
  }
}

// Generate unique reference code
export function generateReferenceCode(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const submissions = readSubmissions();
  const todaySubmissions = submissions.filter(s => s.referenceCode.startsWith(`LE-${year}-${month}${day}`));
  const sequence = String(todaySubmissions.length + 1).padStart(4, '0');

  return `LE-${year}-${month}${day}-${sequence}`;
}

// Save new submission
export function saveSubmission(submission: Omit<TestSubmission, 'id' | 'referenceCode' | 'createdAt' | 'status'>): TestSubmission {
  const submissions = readSubmissions();

  const newSubmission: TestSubmission = {
    ...submission,
    id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    referenceCode: generateReferenceCode(),
    createdAt: new Date().toISOString(),
    status: 'pending',
  };

  submissions.push(newSubmission);
  writeSubmissions(submissions);

  return newSubmission;
}

// Get all submissions
export function getAllSubmissions(): TestSubmission[] {
  return readSubmissions();
}

// Get submission by reference code
export function getSubmissionByReferenceCode(referenceCode: string): TestSubmission | undefined {
  const submissions = readSubmissions();
  return submissions.find(s => s.referenceCode === referenceCode);
}

// Get submission by ID
export function getSubmissionById(id: string): TestSubmission | undefined {
  const submissions = readSubmissions();
  return submissions.find(s => s.id === id);
}

// Update submission status
export function updateSubmissionStatus(id: string, status: TestSubmission['status']): TestSubmission | undefined {
  const submissions = readSubmissions();
  const index = submissions.findIndex(s => s.id === id);

  if (index === -1) {
    return undefined;
  }

  submissions[index].status = status;
  writeSubmissions(submissions);

  return submissions[index];
}

// Search submissions
export function searchSubmissions(query: {
  referenceCode?: string;
  email?: string;
  name?: string;
  level?: string;
  status?: string;
  dateFrom?: string;
  dateTo?: string;
}): TestSubmission[] {
  let submissions = readSubmissions();

  if (query.referenceCode) {
    submissions = submissions.filter(s =>
      s.referenceCode.toLowerCase().includes(query.referenceCode!.toLowerCase())
    );
  }

  if (query.email) {
    submissions = submissions.filter(s =>
      s.studentEmail.toLowerCase().includes(query.email!.toLowerCase())
    );
  }

  if (query.name) {
    submissions = submissions.filter(s =>
      s.studentName.toLowerCase().includes(query.name!.toLowerCase())
    );
  }

  if (query.level) {
    submissions = submissions.filter(s => s.level === query.level);
  }

  if (query.status) {
    submissions = submissions.filter(s => s.status === query.status);
  }

  if (query.dateFrom) {
    const fromDate = new Date(query.dateFrom);
    submissions = submissions.filter(s => new Date(s.createdAt) >= fromDate);
  }

  if (query.dateTo) {
    const toDate = new Date(query.dateTo);
    toDate.setHours(23, 59, 59, 999);
    submissions = submissions.filter(s => new Date(s.createdAt) <= toDate);
  }

  return submissions.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

// Get statistics
export function getStatistics() {
  const submissions = readSubmissions();

  const levelCounts = {
    'Below A1': 0,
    'A1': 0,
    'A2': 0,
    'A2+': 0,
    'B1': 0,
  };

  const statusCounts = {
    pending: 0,
    reviewed: 0,
    contacted: 0,
    enrolled: 0,
  };

  submissions.forEach(s => {
    if (levelCounts.hasOwnProperty(s.level)) {
      levelCounts[s.level as keyof typeof levelCounts]++;
    }
    statusCounts[s.status]++;
  });

  return {
    total: submissions.length,
    today: submissions.filter(s => {
      const today = new Date();
      const submissionDate = new Date(s.createdAt);
      return submissionDate.toDateString() === today.toDateString();
    }).length,
    byLevel: levelCounts,
    byStatus: statusCounts,
    averageScore: submissions.length > 0
      ? Math.round(submissions.reduce((sum, s) => sum + s.score, 0) / submissions.length)
      : 0,
  };
}
