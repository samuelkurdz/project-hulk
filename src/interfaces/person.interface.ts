export interface Apps {
  teams: string[];
  events: string[];
  workers: string[];
  attendance: string[];
}


export interface Person {
  _id: string
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isWorker: boolean;
  company: string;
  apps: Apps;
}