import { DiaryEntry } from "@/types/diary";
import { ScheduleEntry } from "@/types/schedule";
import { FieldData, LayoutData } from "@/types/user-data";

import CalendarContainer from "./calendar-container";
import DiaryContainer from "./diary-container";
import FieldLayout from "../molecules/field-layout";
import PlantingPlan from "../molecules/planting-plan";
import { PlanEntry } from "@/types/plan";

type NavItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  color: string;
};

type Props = {
  selected: string | null;
  displaying: string | null;
  navItems: NavItem[];
  diaryEntries: DiaryEntry[] | undefined;
  scheduleEntries: ScheduleEntry[] | undefined;
  fields: FieldData[] | undefined;
  layouts: LayoutData[] | undefined;
  plans: PlanEntry[] | undefined;
};

export default function MainContents({
  selected,
  displaying,
  navItems,
  diaryEntries,
  scheduleEntries,
  fields,
  layouts,
  plans,
}: Props) {
  const activeItem = navItems.find((i) => i.key === displaying);

  const isClearing = selected === null;

  return (
    <div
      key={selected}
      className={`app-blurred-bg-white h-[90vh] w-3/4 overflow-hidden border-l-4 ${isClearing ? "animate-fadeOut" : "animate-slideIn"} `}
      style={{
        borderColor: activeItem?.color ?? "#ccc",
      }}
    >
      {/* --- Diary --- */}
      {displaying === "diary" && <DiaryContainer diaryEntries={diaryEntries} />}

      {/* --- other items --- */}
      {displaying === "calendar" && (
        <CalendarContainer
          diaryEntries={diaryEntries}
          scheduleEntries={scheduleEntries}
        />
      )}
      {displaying === "plan" && <PlantingPlan plans={plans} fields={fields} />}
      {displaying === "layout" && (
        <FieldLayout fields={fields} layouts={layouts} />
      )}

      {/* --- Animations --- */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(40px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(40px);
            opacity: 0;
          }
        }
      `}</style>

      <style jsx global>{`
        .animate-slideIn {
          animation: slideIn 0.4s ease-out forwards;
        }
        .animate-fadeOut {
          animation: fadeOut 0.3s ease-in forwards;
        }
      `}</style>
    </div>
  );
}
