// lib/formatDate.ts

export function getFormattedDate(date = new Date()): string {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const days = ["日", "月", "火", "水", "木", "金", "土"];
  const weekday = days[date.getDay()];

  return `${month}月${day}日（${weekday}）`;
}
