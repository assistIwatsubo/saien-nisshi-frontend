// src/types/next-auth.d.ts
import { DefaultSession } from "next-auth";

// User 型に accessToken を追加
declare module "next-auth" {
  interface Session {
    user: {
      accessToken?: string;
    } & DefaultSession["user"];
  }

  interface User {
    /** 追加したアクセストークン */
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    accessToken?: string;
  }
}
