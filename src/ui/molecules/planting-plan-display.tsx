import { PlanEntry } from "@/types/plan";

function getFontSizeStyle(
  text: string,
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
  planEntries?: PlanEntry[];
};

export default function PlantingPlanForm({
  parentCommonStyle,
  childrenCommonStyle,
  planEntries,
}: Props) {
  const childrenStyle = `${childrenCommonStyle} w-30 border-gray-300 p-2 text-center`;

  return (
    <>
      {planEntries &&
        planEntries.map((field) => (
          <div key={field.fieldId} className="flex">
            {field.crops.length > 0 ? (
              field.crops.map((crop) => (
                <ol
                  key={crop.cropFieldId}
                  className={`divide-gray-300 ${parentCommonStyle} ml-0.5`}
                >
                  <li
                    className={`line-clamp-2 bg-gray-300/25 ${childrenStyle}`}
                    title={field.fieldName}
                    style={getFontSizeStyle(field.fieldName)}
                  >
                    {field.fieldName}
                  </li>
                  <li className={`bg-gray-300/25 ${childrenStyle}`}>
                    {crop.fieldRatio}%
                  </li>
                  <li
                    className={`line-clamp-2 bg-gray-300/25 ${childrenStyle}`}
                    style={getFontSizeStyle(crop.cropName)}
                  >
                    {crop.cropName}
                  </li>

                  {Array.from({ length: 12 }, (_, i) => {
                    const monthNumber = i + 1;
                    const plan = crop.plans?.find(
                      (p) => p.month === monthNumber,
                    );

                    return (
                      <li
                        key={`${crop.cropFieldId}-${monthNumber}`}
                        className={childrenStyle}
                      >
                        {plan ? plan.action : "-"}
                      </li>
                    );
                  })}
                </ol>
              ))
            ) : (
              <p className="text-sm text-gray-400">作物データがありません</p>
            )}
          </div>
        ))}
    </>
  );
}
