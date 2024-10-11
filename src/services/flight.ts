import { AIRPORTS } from "@/data/airports";
import { Flight, FLIGHTS } from "@/data/flights";
import { getDayFromTime } from "@/lib/date";
import { v4 as uuidv4 } from "uuid";

export const AIRPORT_KEY = "airports";
export const FLIGHTS_KEY = (query: FlightQuery) => {
  return `flights-${JSON.stringify(query)}`;
};

export const getAirports = () => {
  return new Promise<typeof AIRPORTS>((resolve) => {
    setTimeout(() => {
      resolve(AIRPORTS);
    }, 2000);
  });
};

export interface FlightResponse {
  flights: { departure: Flight; back: Flight; id: string }[];
  totalPages: number;
  totalFlights: number;
  limit: number;
}

interface FlightQuery {
  from: string;
  to: string;
  departureDate: number;
  returnDate: number;
  page: number;
}

const FLIGHT_LIMIT_PER_PAGE = 4;
export const getFlights = ({
  from,
  to,
  departureDate,
  returnDate,
  page,
}: FlightQuery) => {
  const departureDay = getDayFromTime(departureDate);
  const returnDay = getDayFromTime(returnDate);
  const matchedDepartureFlights = FLIGHTS.filter((flight) => {
    if (
      flight.start === from &&
      flight.end === to &&
      flight.availableDays.includes(departureDay)
    ) {
      return flight;
    }
  });
  const matchedReturnFlights = FLIGHTS.filter((flight) => {
    if (
      flight.start === to &&
      flight.end === from &&
      flight.availableDays.includes(returnDay)
    ) {
      return flight;
    }
  });

  let mainFlights = matchedDepartureFlights;
  let secondaryFlights = matchedReturnFlights;
  let isMainDeparture = true;

  if (matchedReturnFlights.length > matchedDepartureFlights.length) {
    isMainDeparture = false;
    mainFlights = matchedReturnFlights;
    secondaryFlights = matchedDepartureFlights;
  }

  const flightList = mainFlights.map((flight, index) => {
    return {
      id: uuidv4(),
      departure: isMainDeparture ? flight : secondaryFlights[index],
      back: isMainDeparture ? secondaryFlights[index] : flight,
    };
  });
  const totalFlights = flightList.length;
  const limit = FLIGHT_LIMIT_PER_PAGE;
  const totalPages = Math.ceil(totalFlights / limit);

  const start = (page - 1) * limit;
  const end = limit + start;

  const results = flightList.slice(start, end);

  return new Promise<FlightResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        flights: results,
        totalPages,
        totalFlights,
        limit: FLIGHT_LIMIT_PER_PAGE,
      });
    }, 3500);
  });
};
