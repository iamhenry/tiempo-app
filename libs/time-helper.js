import moment from "moment";

export function format(timeInSecond) {
  return moment.duration(timeInSecond, "seconds").format("h:mm:ss", {
    trim: false,
  });
}

export function calculateDuration(item) {
  return (item.exercise + item.rest) * item.repeat;
}
