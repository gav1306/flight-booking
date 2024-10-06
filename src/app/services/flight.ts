import { AIRPORTS } from "@/data/airports";

export const AIRPORT_KEY = "airports";

export const getAirports = () => {
  return new Promise<typeof AIRPORTS>((resolve) => {
    setTimeout(() => {
      resolve(AIRPORTS);
    }, 5000);
  });
};
