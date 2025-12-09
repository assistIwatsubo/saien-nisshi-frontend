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

const childrenStyle = `min-w-20 text-right font-bold text-white ${childrenCommonStyle} bg-[var(--app-primary-color)] `;

type Props = {
  edit?: boolean;
  plans?: PlanEntry[];
  fields?: FieldData[];
};

export default function PlantingPlan({ edit = false, plans, fields }: Props) {
  return (
    <div className="app-blurred-bg-white min-w-full overflow-auto rounded-lg rounded-tl-none p-4">
      <div className="flex w-auto items-start justify-start rounded-md border-2 border-white bg-white/50 shadow-sm">
        <ol
          data-label="table-header"
          className={`w-fit divide-green-800 ${parentCommonStyle}`}
        >
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
        {edit ? (
          <PlantingPlanForm
            parentCommonStyle={parentCommonStyle}
            childrenCommonStyle={childrenCommonStyle}
            planEntries={plans}
            fields={fields}
          />
        ) : (
          <PlantingPlanDisplay
            parentCommonStyle={parentCommonStyle}
            childrenCommonStyle={childrenCommonStyle}
            planEntries={plans}
          />
        )}
      </div>
    </div>
  );
}
