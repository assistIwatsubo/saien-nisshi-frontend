"use client";

import { useState } from "react";
import Router from "next/router";
import DiaryTitleForm from "./diary/diary-title-form";
import DiarySummaryForm from "./diary/diary-summary-form";
import DiaryDetailList from "./diary/diary-detail-list";
import Button from "@/ui/atoms/button"; // 保存ボタン用

import { DiaryDetail } from "@/types/diary";

type Props = {
  initialTitle?: string;
  initialSummary?: string;
  initialDetails?: DiaryDetail[];
  diaryId: string;
  tags: Record<string, string[]>; // ここは fieldLabelType に合わせるとより型安全
};

export default function FormDiary({
  initialTitle = "",
  initialSummary = "",
  initialDetails = [],
  tags,
  diaryId,
}: Props) {
  const [title, setTitle] = useState(initialTitle);
  const [summary, setSummary] = useState(initialSummary);
  const [details, setDetails] = useState<DiaryDetail[]>(initialDetails);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // API 呼び出しで保存
    const res = await fetch("/api/diary/edit", {
      method: "POST",
      body: JSON.stringify({ title, summary, details }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      alert("保存しました！");
      sessionStorage.setItem("flashMessage", "編集完了しました");
      Router.push(`/terrace/diary/${diaryId}`);
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
        <DiaryDetailList values={details} tags={tags} onChange={setDetails} />
      </div>

      <div className="w-full pb-8 text-center">
        <Button type="submit" color="primary">
          {diaryId ? "編集を完了する" : "追加を完了する"}
        </Button>
      </div>
    </form>
  );
}
