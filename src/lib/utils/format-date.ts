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
