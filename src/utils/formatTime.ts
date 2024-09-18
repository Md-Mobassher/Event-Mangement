import moment from "moment";

// Function to format the time part
export function formatTime(timeString: string) {
  return moment(timeString, "HH:mm")
    .format("hA")
    .replace("AM", "am")
    .replace("PM", "pm");
}
