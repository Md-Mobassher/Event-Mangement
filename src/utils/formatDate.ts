import moment from "moment";

// Function to format the date part
export function formatDate(dateString: string) {
  return moment(dateString).format("ddd, MMM Do");
}
