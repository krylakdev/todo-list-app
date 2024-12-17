export interface Task {
  id: string;
  name: string;
  isImportant: boolean;
  dateCreated: Date;
  dateCompleted: Date | null;
}
