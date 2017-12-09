export interface ITask {
  id: number; 
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  categoryId:number;
  assigneId: number;
}


export interface ITaskType {
  id: number;  
  description: string; 
}

