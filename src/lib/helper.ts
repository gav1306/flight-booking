import { AIRPORTS } from "@/data/airports";

export const airportFilter = (value: string, search: string): number => {
  const { name } = AIRPORTS.find((airport) => {
    return airport.code === value;
  })!;

  const normalizedSearch = search.toLowerCase();
  const normalizedName = name.toLowerCase();

  if (normalizedName.startsWith(normalizedSearch)) {
    return 1;
  }
  return 0;
};
