type FormatOptions = {
  includeWeekday?: boolean;
  includeTime?: boolean;
};

export const getFormattedDate = (
  date: Date = new Date(),
  options: FormatOptions = {},
): string => {
  const monthDay = `${date.getMonth() + 1}月${date.getDate()}日`;
  const weekday = `(${["日", "月", "火", "水", "木", "金", "土"][date.getDay()]})`;
  const time = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;

  return [
    monthDay,
    options.includeWeekday && weekday,
    options.includeTime && time,
  ]
    .filter(Boolean)
    .join(" ");
};

export const getFormattedDateTime = (
  isoString: string,
  options: FormatOptions = { includeWeekday: true, includeTime: true },
): string => {
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return ""; // 無効な日付の場合空文字
  return getFormattedDate(date, options);
};

export const getDatetimeLocalString = (isoString: string): string => {
  if (!isoString) return "";

  const date = new Date(isoString);
  // datetime-local は "YYYY-MM-DDTHH:mm" 形式
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes())
  );
};
