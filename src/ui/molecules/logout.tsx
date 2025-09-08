"use client";
import { signOut } from "next-auth/react";
import Button from "@/ui/atoms/button";

export default function Logout() {
  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/" }); // ログアウト後にトップへ
  };

  return <Button onClick={handleLogout}>ログアウト</Button>;
}
