"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Button from "@/ui/atoms/button";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/terrace", // ログイン後の遷移先（任意）
    });
  };

  return (
    <>
      <p className="mt-4 text-xl font-bold">ユーザーログイン</p>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 p-8">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border px-3 py-2"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-md border px-3 py-2"
          />
        </div>

        <Button type="submit">ログインする</Button>
      </form>
    </>
  );
}
