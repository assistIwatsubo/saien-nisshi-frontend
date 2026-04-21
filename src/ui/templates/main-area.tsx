"use client";

import { useState, useEffect } from "react";
import { Book, Calendar, FilePen, Grid2X2 } from "lucide-react";

import MainNav from "@/ui/molecules/main-nav";
import MainContents from "@/ui/organisms/main-contents";

import { DiaryEntry } from "@/types/diary";
import { ScheduleEntry } from "@/types/schedule";
import { FieldData, LayoutData } from "@/types/user-data";
import { PlanEntry } from "@/types/plan";
import { NavItem } from "@/types/main-nav";

type Props = {
  diaryEntries: DiaryEntry[] | undefined;
  scheduleEntries: ScheduleEntry[] | undefined;
  fields: FieldData[] | undefined;
  layouts: LayoutData[] | undefined;
  plans: PlanEntry[] | undefined;
};

const navItems: NavItem[] = [
  { key: "diary", label: "日誌", icon: <Book size={18} />, color: "#f87171" },
  {
    key: "calendar",
    label: "カレンダー",
    icon: <Calendar size={18} />,
    color: "#60a5fa",
  },
  {
    key: "plan",
    label: "作付け計画",
    icon: <FilePen size={18} />,
    color: "#34d399",
  },
  {
    key: "layout",
    label: "作付け図",
    icon: <Grid2X2 size={18} />,
    color: "#facc15",
  },
];

export default function MainArea({
  diaryEntries,
  scheduleEntries,
  fields,
  layouts,
  plans,
}: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [displaying, setDisplaying] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    setSelected((prev) => (prev === item ? null : item));
  };

  // selected が変わったら、それに応じて displaying を更新する
  useEffect(() => {
    if (selected === null) {
      // フェードアウト中は中身を残したいので 300ms 待つ
      const timer = setTimeout(() => {
        setDisplaying(null);
      }, 300); // fadeOut duration と合わせる

      return () => clearTimeout(timer);
    } else {
      // 新しい選択があれば即時切り替え
      setDisplaying(selected);
    }
  }, [selected]);

  return (
    <div className="flex items-start justify-start gap-4">
      <MainNav navItems={navItems} selected={selected} onClick={handleSelect} />

      <MainContents
        navItems={navItems}
        selected={selected} // ← アニメーション判定用
        displaying={displaying} // ← 実際に表示する内容
        diaryEntries={diaryEntries}
        scheduleEntries={scheduleEntries}
        fields={fields}
        layouts={layouts}
        plans={plans}
      />
    </div>
  );
}
