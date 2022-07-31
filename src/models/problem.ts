export interface Problem {
  id?: string;
  title: string;
  statement: string;
  source: string | null;
  createdTimestamp: number;
  authorId: string;
}
