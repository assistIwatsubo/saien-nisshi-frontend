export type NewsEntry = {
  id: string;
  date: string; // ISO形式 yyyy-mm-dd
  title: string;
  categories: string[];
  body: string;
};
