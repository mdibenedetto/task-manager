export interface ITask {
  id: number;
  _id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  category:string;
  assigneId: number;
}

