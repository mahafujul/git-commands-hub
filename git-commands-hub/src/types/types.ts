export interface Command {
  code: string;
  description: string;
}

export interface Workflow {
  title: string;
  code: string;
}

export interface Subsection {
  title: string;
  commands?: Command[];
  tip?: string;
  workflow?: Workflow;
}

export type DifficultyType =
  | "easy"
  | "medium"
  | "hard"
  | "github"
  | "emergency";
export type FilterType = DifficultyType | "all";

export interface Section {
  title: string;
  difficulty: DifficultyType;
  subsections: Subsection[];
}
