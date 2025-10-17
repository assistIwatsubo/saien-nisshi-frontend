import { FieldLabelType } from "@/types/diary";
import { getFieldCrop } from "./getFieldCrop";
import { getUserField } from "./getUserField";
import { FieldCrop, UserField } from "@/types/tags";

export const getTags = async (): Promise<Record<FieldLabelType, string[]>> => {
  const [fieldCrops, userFields] = await Promise.all([
    getFieldCrop(),
    getUserField(),
  ]);

  // tagsオブジェクトを初期化
  const tags: Record<FieldLabelType, string[]> = {
    crop_name: fieldCrops.map((item: FieldCrop) => item?.crop_name),
    field_name: userFields.map((item: UserField) => item?.name),
    pesticide_name: [],
    concentration: [],
    dilution_rate: [],
    applied_amount: [],
  };

  // そのまま返す
  console.log(tags);
  return tags;
};
