// src/types/next-auth.d.ts

import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    userType?: "beginner" | "advanced";
    role?: "admin" | "worker";
  }

  interface Session {
    user: {
      userType?: "beginner" | "advanced";
      role?: "admin" | "worker";
    } & DefaultSession["user"];
  }

  interface JWT {
    userType?: "beginner" | "advanced";
    role?: "admin" | "worker";
  }
}
