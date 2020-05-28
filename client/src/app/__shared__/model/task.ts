export interface ITask {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  categoryId: number;
  assigneeId: number;
}
export interface ITaskType {
  id: number   | string;
  description: string;
}

