// format-date.ts

export type FormatOptions = {
  includeYear?: boolean;
  includeWeekday?: boolean;
  includeTime?: boolean;
};

/**
 * ISO形式の日付（YYYY-MM-DD）を返す
 */
export const getISODate = (date: Date = new Date()): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

/**
 * 年月日・曜日を分解して返す
 */
export const getDateParts = (date: Date = new Date()) => {
  const iso = getISODate(date);
  const [year, month, day] = iso.split("-");
  const weekday = date.toLocaleDateString("ja-JP", { weekday: "long" });

  return {
    iso,
    year,
    month,
    day: day.padStart(2, "0"),
    weekday,
  };
};

/**
 * フォーマット済み日付を返す（例: 2025年08月21日 (木) 10:45）
 */
export const getFormattedDate = (
  date: Date = new Date(),
  options: FormatOptions = {},
): string => {
  const yearMonthDay = `${
    options.includeYear ? `${date.getFullYear()}年` : ""
  }${String(date.getMonth() + 1).padStart(2, "0")}月${String(
    date.getDate(),
  ).padStart(2, "0")}日`;

  const weekday = `(${["日", "月", "火", "水", "木", "金", "土"][date.getDay()]})`;
  const time = `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes(),
  ).padStart(2, "0")}`;

  return [
    yearMonthDay,
    options.includeWeekday && weekday,
    options.includeTime && time,
  ]
    .filter(Boolean)
    .join(" ");
};

/**
 * ISO文字列を与えてフォーマット済み日付を返す
 */
export const getFormattedDateTime = (
  isoString: string,
  options: FormatOptions = { includeWeekday: true, includeTime: true },
): string => {
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return ""; // 無効な日付なら空文字
  return getFormattedDate(date, options);
};

/**
 * datetime-local input 用の文字列（YYYY-MM-DDTHH:mm）を返す
 */
export const getDatetimeLocalString = (isoString: string): string => {
  if (!isoString) return "";

  const date = new Date(isoString);
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
