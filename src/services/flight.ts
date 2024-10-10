import { AIRPORTS } from "@/data/airports";
import { FLIGHTS } from "@/data/flights";

export const AIRPORT_KEY = "airports";
export const FLIGHTS_KEY = "flights";

export const getAirports = () => {
  return new Promise<typeof AIRPORTS>((resolve) => {
    setTimeout(() => {
      resolve(AIRPORTS);
    }, 5000);
  });
};

export const getFlights = () => {
  return new Promise<typeof FLIGHTS>((resolve) => {
    setTimeout(() => {
      resolve(FLIGHTS);
    }, 10000);
  });
};
