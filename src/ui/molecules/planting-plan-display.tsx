import { PlanEntry } from "@/types/plan";

function getFontSizeStyle(
  text: string = "",
  limit: number = 6,
  smallFont: string = "0.75rem",
  defaultFont: string = "1rem",
): React.CSSProperties {
  return {
    fontSize: text.length > limit ? smallFont : defaultFont,
  };
}

type Props = {
  parentCommonStyle: string;
  childrenCommonStyle: string;
  planEntry?: PlanEntry[];
};

export default function PlantingPlanForm({
  parentCommonStyle,
  childrenCommonStyle,
  planEntry,
}: Props) {
  const childrenStyle = `${childrenCommonStyle} w-30 border-gray-300 p-2 text-center`;

  if (!planEntry) return;
  console.log(planEntry);

  return (
    <>
      {planEntry &&
        planEntry.map((plan) => (
          <div key={plan.fieldId} className="flex">
            <ol
              key={plan.cropId}
              className={`divide-gray-300 ${parentCommonStyle} ml-0.5`}
            >
              <li
                className={`line-clamp-2 bg-gray-300/25 ${childrenStyle}`}
                title={plan.fieldName}
                style={getFontSizeStyle(plan.fieldName)}
              >
                {plan.fieldName}
              </li>
              <li className={`bg-gray-300/25 ${childrenStyle}`}>
                {plan.fieldRatio}%
              </li>
              <li
                className={`line-clamp-2 bg-gray-300/25 ${childrenStyle}`}
                style={getFontSizeStyle(plan.planName)}
              >
                {plan.cropName}
              </li>

              {plan.plans.map((p) => (
                <li
                  key={`${p.cropFieldId}-${p.month}`}
                  className={childrenStyle}
                >
                  {p ? p.action : "-"}
                </li>
              ))}
            </ol>
          </div>
        ))}
    </>
  );
}
