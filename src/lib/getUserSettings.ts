import { getAccessToken } from "./getAccessToken";
import { PlanEntry } from "@/types/plan";
import { FieldData, LayoutData } from "@/types/user-data";

export const getUserSettings = async (): Promise<
  Record<string, string> | undefined
> => {
  try {
    const token = await getAccessToken();
    const res = await fetch(`http://localhost:8080/api/me/settings`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("設定取得失敗");
      return {};
    }

    const settings = await res.json();
    return settings.data;
  } catch (e) {
    console.error(e);
  }
};

export const getPlans = async (): Promise<PlanEntry[] | undefined> => {
  try {
    const token = await getAccessToken();
    const res = await fetch(`http://localhost:8080/api/plans`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("設定取得失敗");
      return undefined;
    }

    const plans = await res.json();
    console.log(plans.data);
    return plans.data;
  } catch (e) {
    console.error(e);
  }
};

export const getFields = async (): Promise<FieldData[] | undefined> => {
  try {
    const token = await getAccessToken();
    const res = await fetch(`http://localhost:8080/api/fields`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("設定取得失敗");
      return undefined;
    }

    const fields = await res.json();
    return fields;
  } catch (e) {
    console.error(e);
  }
};

export const getLayouts = async (): Promise<LayoutData[] | undefined> => {
  try {
    const token = await getAccessToken();
    const res = await fetch(`http://localhost:8080/api/layouts`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("設定取得失敗");
      return undefined;
    }

    const layouts = await res.json();
    return layouts.data;
  } catch (e) {
    console.error(e);
  }
};
