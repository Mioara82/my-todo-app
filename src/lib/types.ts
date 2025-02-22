export type Todo = {
  value: string;
  id: number;
  priority: number;
  complexity: number;
  dueDate: Date | null;
  subtasks: string[] | null;
  tags: string[] | null;
  isCompleted: boolean;
};
