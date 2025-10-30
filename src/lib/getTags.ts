import { FieldLabelType } from "@/types/diary";
import { getFieldCrop } from "./getFieldCrop";
import { getUserField } from "./getCropField";
import { FieldCrop, UserField } from "@/types/tags";

export const getTags = async (): Promise<Record<FieldLabelType, string[]>> => {
  const [fieldCrops, userFields] = await Promise.all([
    getFieldCrop(),
    getUserField(),
  ]);

  // tagsオブジェクトを初期化
  const tags: Record<FieldLabelType, string[]> = {
    cropName: fieldCrops.map((item: FieldCrop) => item?.cropName),
    fieldName: userFields.map((item: UserField) => item?.name),
    pesticideName: [],
    concentration: [],
    dilutionRate: [],
    appliedAmount: [],
  };

  // そのまま返す
  console.log(tags);
  return tags;
};
