export type NewsItem = {
  id: string;
  date: string; // ISO形式 yyyy-mm-dd
  title: string;
  tags?: string[];
};
