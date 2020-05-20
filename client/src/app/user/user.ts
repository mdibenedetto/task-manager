export interface IUser {
  id: number;
  userName: string;
  passWord: string;
  fullName: string;
  isAdmin?: boolean;
}