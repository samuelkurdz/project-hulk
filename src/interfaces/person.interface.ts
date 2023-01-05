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
  isWorker: boolean;
  company: Company;
  apps: Apps;
  createdAt: string;
  updatedAt: string;
}

export interface Company {
  _id: string;
  companyName: string;
  officialEmail: string;
  category: string;
  logo: string;
}