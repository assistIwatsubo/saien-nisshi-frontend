import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { signIn, signOut, auth, handlers } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const res = await fetch("http://localhost:8080/api/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });

          if (!res.ok) {
            return null;
          }

          const data = await res.json();
          return {
            id: data.id,
            name: data.name,
            email: data.email,
            accessToken: data.accessToken,
          };
        } catch (err) {
          console.error("Fetch failed:", err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token?.accessToken) {
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
});
