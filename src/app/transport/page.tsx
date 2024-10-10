"use client";

import useSWR from "swr";
import { FLIGHTS_KEY, getFlights } from "@/services/flight";
import Loading from "@/components/transport/loading";
import FlightCard from "@/components/flight/flight-card";

const Transport = () => {
  const { data, isLoading } = useSWR(FLIGHTS_KEY, getFlights);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section>
      <div className="p-[72px] max-w-[1200px] m-auto flex flex-col gap-4">
        {data?.map((flight) => {
          return <FlightCard key={flight.id} {...flight} />;
        })}
      </div>
    </section>
  );
};

export default Transport;
