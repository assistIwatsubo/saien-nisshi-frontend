import { getAccessToken } from "./getAccessToken";

export const getFieldCrop = async () => {
  try {
    const token = await getAccessToken();
    const res = await fetch(`http://localhost:8080/api/field-crops/`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("API request failed:", res.status, res.statusText);
      return null;
    }

    const fieldsCrops = await res.json();
    // console.log(fieldsCrops);
    return fieldsCrops;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};
