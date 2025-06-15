// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials ?? {};

        // ここに認証ロジックを書く（今はダミー）
        if (email === "test@example.com" && password === "password123") {
          return {
            id: "1",
            name: "Test User",
            email: "test@example.com",
            userType: "advanced",
            role: "admin",
          };
        }

        if (email === "beginner@example.com" && password === "password123") {
          return {
            id: "2",
            name: "Beginner User",
            email: "beginner@example.com",
            userType: "beginner",
            // roleは付与しない
          };
        }

        return null; // 認証失敗
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userType = user.userType ?? "beginner"; // beginner or advanced

        if (token.userType === "advanced") {
          token.role = user.role ?? "worker"; // roleをセット
        } else {
          delete token.role; // beginnerならroleは持たせない
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user.userType = token.userType;
      if (token.userType === "advanced") {
        session.user.role = token.role;
      } else {
        delete session.user.role;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
