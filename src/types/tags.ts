export type TagCategory = "cropName" | "fieldName" | "pesticideName";

export type TagsByCategory = {
  [key in TagCategory]: string[];
};
