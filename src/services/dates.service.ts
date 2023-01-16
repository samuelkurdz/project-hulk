import { format } from "date-fns";

export const DatesService = {
  formatDate: (dateArgs: string) => {
    const date = new Date(dateArgs);
    return format(date, 'MMMM dd, yyyy');
  }
}