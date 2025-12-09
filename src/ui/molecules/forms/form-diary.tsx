"use client";

import { useState } from "react";
import Router from "next/router";
import DiaryTitleForm from "./diary/diary-title-form";
import DiarySummaryForm from "./diary/diary-summary-form";
import DiaryDetailList from "./diary/diary-detail-list";
import Button from "@/ui/atoms/button";

import { DiaryDetail, DiaryEntry } from "@/types/diary";
import { getAccessToken } from "@/lib/getAccessToken";

type Props = {
  initialData?: DiaryEntry;
  tags: Record<string, string[]>;
};

export default function FormDiary({ initialData, tags }: Props) {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [summary, setSummary] = useState(initialData?.summary ?? "");
  const [details, setDetails] = useState<DiaryDetail[]>(
    initialData?.details ?? [],
  );
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const endpoint = initialData
      ? `/api/diaries/${initialData.date}` // 更新は日付単位でPUT
      : `/api/diaries`; // 新規作成はPOST

    const method = initialData ? "PUT" : "POST";
    const token = await getAccessToken();

    const res = await fetch(`http://localhost:8080/${endpoint}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, summary, details }),
    });

    if (res.ok) {
      alert("保存しました！");
      sessionStorage.setItem(
        "flashMessage",
        initialData ? "編集完了しました" : "追加完了しました",
      );
      if (initialData && initialData?.diaryId) {
        Router.push(`/terrace/diary/${initialData.diaryId}`);
      } else {
        Router.push("/terrace"); // 新規作成後は一覧やトップに遷移
      }
    } else {
      const errorData = await res.json();
      setError(`保存に失敗しました： ${errorData.error}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto flex w-full flex-col items-center justify-start gap-8 py-8 lg:max-w-9/10"
    >
      <div
        data-role="diary-content-summary"
        className="flex w-full flex-col gap-2 rounded-sm border-2 border-[var(--app-border-gray)] bg-amber-50/50 p-2"
      >
        <DiaryTitleForm value={title} onChange={setTitle} />
        <DiarySummaryForm value={summary} onChange={setSummary} />
      </div>

      <div
        data-role="diary-content-details"
        className="mt-4 flex w-full flex-col items-center justify-start gap-8 border-t-1 border-b-1 border-dashed border-gray-400 px-4 py-8"
      >
        <h3 className="text-lg font-bold">詳細を編集する</h3>
        {/* <DiaryDetailList values={details} tags={tags} onChange={setDetails} /> */}
      </div>
      <p className="font-red-500">{error}</p>
      <div className="w-full pb-8 text-center">
        <Button type="submit" color="primary">
          {initialData ? "編集を完了する" : "記録を完了する"}
        </Button>
      </div>
    </form>
  );
}
