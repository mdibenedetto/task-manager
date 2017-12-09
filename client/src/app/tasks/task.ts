export interface ITask {
  id: number; 
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  category:string;
  assigneId: number;
}


export interface ITaskType {
  id: number;  
  description: string; 
}

