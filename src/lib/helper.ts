import { AIRPORTS } from "@/data/airports";
import { ReadonlyURLSearchParams } from "next/navigation";

export const airportFilter = (value: string, search: string): number => {
  const { name, city, country } = AIRPORTS.find((airport) => {
    return airport.code === value;
  })!;

  const normalizedSearch = search.toLowerCase();
  const normalizedName = name.toLowerCase();
  const normalizedCity = city.toLowerCase();
  const normalizedCountry = country.toLowerCase();

  if (
    normalizedName.startsWith(normalizedSearch) ||
    normalizedCity.startsWith(normalizedSearch) ||
    normalizedCountry.startsWith(normalizedSearch)
  ) {
    return 1;
  }
  return 0;
};

export const createSearchParams = (data: Record<string, string | number>) => {
  const params = new URLSearchParams();
  for (const key in data) {
    params.set(key, data[key].toString());
  }
  return params.toString();
};

export const getFlightFilterSearchParams = (
  searchParams: ReadonlyURLSearchParams
) => {
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const departureDate = +searchParams.get("departureDate")!;
  const returnDate = +searchParams.get("returnDate")!;

  return { from, to, departureDate, returnDate };
};
