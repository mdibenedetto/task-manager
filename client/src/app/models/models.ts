export class Task {
  _id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  assigneId: number;
}

export class User {
  id: number;
  userName: string;
  isAdmin: boolean;
}
