import PlantingPlanDisplay from "@/ui/molecules/planting-plan-display";
import PlantingPlanForm from "./planting-plan-form";
import { PlanEntry } from "@/types/plan";
import { FieldData } from "@/types/user-data";

const rowLabels = ["圃場", "割合", "品目"];
const months = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];

export const parentCommonStyle =
  "flex flex-col justify-start items-center divide-y ";

export const childrenCommonStyle = "h-10 px-2 py-0.5 content-center";

const childrenStyle = `min-w-20 text-right font-bold text-white ${childrenCommonStyle} bg-[var(--app-primary-color)]`;

type Props = {
  edit?: boolean;
  plan: PlanEntry;
  fields?: FieldData[];
};

export default function PlantingPlan({ edit = false, plan, fields }: Props) {
  return (
    <section className="app-blurred-bg-white flex w-fit flex-shrink-0 items-start justify-start p-4">
      <ol
        data-label="table-header"
        className={`w-fit divide-green-800 ${parentCommonStyle}`}
      >
        {/* 見出し部分 */}
        {rowLabels.map((item) => (
          <li
            key={`header-${item}`}
            className={` ${childrenStyle} bg-[var(--app-secondary-color)]`}
          >
            {item}
          </li>
        ))}
        {months.map((item) => (
          <li
            key={`header-${item}`}
            className={`${childrenStyle} bg-[var(--app-primary-color)]`}
          >
            {item}
          </li>
        ))}
      </ol>

      {/* 編集モードか表示モードかで切り替え */}
      {edit ? (
        <PlantingPlanForm
          parentCommonStyle={parentCommonStyle}
          childrenCommonStyle={childrenCommonStyle}
          planEntry={plan} // 選択された年度のデータ
          fields={fields}
        />
      ) : (
        <PlantingPlanDisplay
          parentCommonStyle={parentCommonStyle}
          childrenCommonStyle={childrenCommonStyle}
          planEntry={plan} // 選択された年度のデータ
        />
      )}
    </section>
  );
}
