export type NodeType = 'question' | 'outcome' | 'intro';

export interface BaseNode {
  id: string;
  type: NodeType;
}

export interface Option {
  id: string;
  label: string;
  nextId: string;
  description?: string;
}

export interface QuestionNode extends BaseNode {
  type: 'question';
  stageLabel?: string; // New: Contextual label like "Step 1: Background"
  educationalContext?: string;
  questionText: string;
  subText?: string;
  options: Option[];
}

export interface OutcomeNode extends BaseNode {
  type: 'outcome';
  title: string;
  // Layered informational sections
  summary: string;
  medicalContext: string[];
  physiology: string;
  commonQuestions: { q: string; a: string }[];
  managementInfo: string;
  treatmentOptions?: string[]; // New: List of potential treatments mentioned in educational context
}

export interface IntroNode extends BaseNode {
  type: 'intro';
  title: string;
  content: string;
  startButtonText: string;
  nextId: string;
}

export type AppNode = QuestionNode | OutcomeNode | IntroNode;

export interface FlowData {
  nodes: Record<string, AppNode>;
  initialNodeId: string;
}