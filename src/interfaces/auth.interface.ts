import { Person } from "./person.interface";

export interface LoggedInUser {
  user: Person;
  access_token: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}