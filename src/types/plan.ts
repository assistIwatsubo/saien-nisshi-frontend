export type PlanEntry = {
  fieldId: number;
  fieldName: string;
  crops: [
    {
      cropFieldId: number;
      fieldRatio: number;
      cropName: string;
      plans?: [
        {
          month: number;
          action: string;
        },
      ];
    },
  ];
};
