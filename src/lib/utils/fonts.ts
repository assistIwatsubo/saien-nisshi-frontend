import {
  BIZ_UDMincho,
  M_PLUS_2,
  M_PLUS_Rounded_1c,
  Shippori_Antique,
} from "next/font/google";

export const appTitle = Shippori_Antique({
  weight: "400",
  subsets: ["latin"],
});

export const pageTitle = M_PLUS_Rounded_1c({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const comment = BIZ_UDMincho({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const system = M_PLUS_2({
  weight: ["200", "400", "700", "900"],
  subsets: ["latin"],
});
