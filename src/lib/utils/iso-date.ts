export const getISODate = (date: Date = new Date()): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getDateParts = (date: Date = new Date()) => {
  const iso = getISODate(date);
  const [year, month, day] = iso.split("-");
  const weekday = date.toLocaleDateString("ja-JP", { weekday: "long" });

  return {
    iso,
    year: Number(year),
    month: Number(month),
    day: day.padStart(2, "0"),
    weekday,
  };
};
