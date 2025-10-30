import { auth } from "@/auth";

export const getAccessToken = async (): Promise<string> => {
  const session = await auth();
  if (!session?.user?.accessToken) {
    throw new Error("Unauthorized: トークンが不正です");
  }

  return session.user.accessToken;
};
