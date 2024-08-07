export default function MonthYear({ time }) {
  return <time dateTime={time}>{getMonthYear(time)}</time>;
}

function getMonthYear(date) {
  if (typeof date === "string") return date;
  return date.toLocaleString("default", { year: "numeric", month: "long" });
}
