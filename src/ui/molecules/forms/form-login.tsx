"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "@/ui/atoms/button";

export default function FormLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        redirectTo: "/terrace",
      });

      if (res?.error) {
        console.error("ログイン失敗:", res.error);
        setError(
          res?.error && "メールアドレスまたはパスワードが正しくありません。",
        );
      } else if (res?.ok && res.url) {
        router.push(res.url);
      } else if (res?.ok) {
        router.push("/terrace");
      } else {
        console.error("ログインフォームエラー: res.urlがありません", res);
      }
    } catch (error) {
      console.error("ログイン中に例外が発生しました:", error);
    }
  };

  return (
    <>
      <p className="my-4 text-xl font-bold">ユーザーログイン</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8">
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
        <p className="text-red-500">{error || "　"}</p>

        <Button type="submit">ログインする</Button>
      </form>
    </>
  );
}
