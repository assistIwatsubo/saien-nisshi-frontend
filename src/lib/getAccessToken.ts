import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const getAccessToken = async (): Promise<string> => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.accessToken) {
    throw new Error("Unauthorized: トークンが不正です");
  }
  return session.user.accessToken;
};
