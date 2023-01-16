import { LoggedInUser } from "../interfaces";

export const storageService = {
  // current logged in user
  storeCurrentUser(userData: LoggedInUser) {
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
  },

  getCurrentUser(): LoggedInUser | undefined {
    const userData = localStorage.getItem("loggedInUser");

    if (!userData) return;
    return JSON.parse(userData) as LoggedInUser;
  },

  getUserToken() {
    return this.getCurrentUser()?.access_token;
  },

  // delete all stored data in local storage
  clearAll() {
    localStorage.clear();
  },
};
