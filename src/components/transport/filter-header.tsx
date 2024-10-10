"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import searchIcon from "../../app/assets/icons/search-dark.svg";
import closeIcon from "../../app/assets/icons/close.svg";
import { useRouter, useSearchParams } from "next/navigation";
import { AIRPORTS } from "@/data/airports";
import { format } from "date-fns";
import FilterFlightsDrawer from "./filter-flights-drawer";
import { getFlightFilterSearchParams } from "@/lib/helper";

const FilterHeader = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onCloseHandler = () => {
    router.push("/");
  };
  const { from, to, departureDate, returnDate } =
    getFlightFilterSearchParams(searchParams);
  const travelFrom = AIRPORTS.find((airport) => {
    return airport.code === from;
  });

  const travelTo = AIRPORTS.find((airport) => {
    return airport.code === to;
  });

  const dateOfDeparture = format(new Date(departureDate), "MMM d");
  const dateOfReturn = format(new Date(returnDate), "MMM d");

  return (
    <header>
      <div className="lg:w-[1200px] flex items-center justify-between py-6 px-6 lg:px-[72px] m-auto">
        <FilterFlightsDrawer>
          <div className="flex flex-col lg:flex-row p-3 lg:border-2 items-center justify-between rounded-[32px] gap-4 tracking-wider">
            <span className="text-base text-text-tertiary max-w-[200px] truncate pl-2">
              <span className="text-text-primary font-medium">
                {travelFrom?.code || ""}
              </span>{" "}
              {travelFrom?.name || "Select Flight"}
            </span>
            <Separator
              orientation="vertical"
              className="h-[26px] hidden lg:block"
            />
            <span className="text-base text-text-tertiary max-w-[200px] truncate">
              <span className="text-text-primary font-medium">
                {travelTo?.code || ""}
              </span>{" "}
              {travelTo?.name || "Select Flight"}
            </span>
            <Separator
              orientation="vertical"
              className="h-[26px] hidden lg:block"
            />
            <span className="font-medium">{`${dateOfDeparture} - ${dateOfReturn}`}</span>
            <Separator
              orientation="vertical"
              className="h-[26px] hidden lg:block"
            />

            <div className="w-full lg:w-9 h-9 rounded-full p-0 bg-button-secondary flex justify-center items-center">
              <Image
                src={searchIcon}
                width={16}
                height={16}
                alt="search icon"
                className="w-4 h-4"
              />
            </div>
          </div>
        </FilterFlightsDrawer>

        <Button
          className="hidden lg:flex h-11 w-11 rounded-full p-0"
          variant="outline"
          onClick={onCloseHandler}
        >
          <Image
            src={closeIcon}
            width={20}
            height={20}
            alt="close icon"
            className="h-5 w-5"
          />
        </Button>
      </div>
    </header>
  );
};

export default FilterHeader;
