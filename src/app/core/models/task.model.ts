export interface Task {
  id: string;
  name: string;
  description: string;
  isImportant: boolean;
  dateCreated: Date;
  dateCompleted: Date | null;
}
