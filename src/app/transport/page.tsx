"use client";

import useSWR from "swr";
import { FLIGHTS_KEY, getFlights } from "@/services/flight";
import Loading from "@/components/transport/loading";

const Transport = () => {
  const { data, isLoading } = useSWR(FLIGHTS_KEY, getFlights);
  if (isLoading) {
    return <Loading />;
  }
  return <div>Transport</div>;
};

export default Transport;
