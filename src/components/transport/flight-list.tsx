"use client";

import useSWR from "swr";
import { FLIGHTS_KEY, getFlights } from "@/services/flight";
import Loading from "@/components/transport/loading";
import FlightCard from "../flight/flight-card";
import { useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import NotFound from "@/components/flight/not-found";

const FlightList = () => {
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();
  const query = {
    from: searchParams.get("from")!,
    to: searchParams.get("to")!,
    departureDate: +searchParams.get("departureDate")!,
    returnDate: +searchParams.get("returnDate")!,
    page,
  };
  const { data, isLoading } = useSWR(FLIGHTS_KEY(query), () =>
    getFlights(query)
  );

  const pageChangeHandler = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  useEffect(() => {
    setPage(1);
  }, [query.from, query.to, query.departureDate, query.returnDate]);

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.flights.length) {
    return <NotFound />;
  }

  const displayedFlights = (page - 1) * data.limit + data.flights.length;
  
  return (
    <div className="p-6 lg:p-[72px] pt-6 max-w-[1200px] m-auto flex flex-col gap-4">
      <span className="text-lg text-text-tertiary">
        Showing {displayedFlights} of {data?.totalFlights} results
      </span>
      {data?.flights.map((flight) => {
        return <FlightCard key={flight.id} {...flight} />;
      })}
      {!!data?.flights.length && (
        <ReactPaginate
          breakLabel="..."
          nextLabel={<ChevronRightIcon width={18} height={18} />}
          onPageChange={pageChangeHandler}
          pageRangeDisplayed={5}
          pageCount={data!.totalPages!}
          previousLabel={<ChevronLeftIcon width={18} height={18} />}
          renderOnZeroPageCount={null}
          forcePage={page ? page - 1 : 0}
          className="pagination"
        />
      )}
    </div>
  );
};

export default FlightList;
