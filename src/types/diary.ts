export type DiaryEntry = {
  id: string;
  user: {
    id: string;
    name: string;
    avatarUrl?: string;
  };
  date: string; // ISO形式 yyyy-mm-dd
  title: string;
  body: string;
  tags?: string[];
};
