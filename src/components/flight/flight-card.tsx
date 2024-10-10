import { AIRPORTS } from "@/data/airports";
import { Flight } from "@/data/flights";
import { secondsToTime, timeDifferenceInHours } from "@/lib/date";
import { formatPriceWithCommas } from "@/lib/helper";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

type FlightCardProps = Flight;
const FlightCard = (props: FlightCardProps) => {
  const {
    name,
    code,
    logo,
    start,
    end,
    startTime,
    endTime,
    price,
    currency,
    stops,
  } = props;

  const hasStops = !!stops.length;
  return (
    <div className="rounded-md border grid grid-cols-[1fr_214px]">
      <div className="px-5 pl-7 py-5 flex flex-col gap-12">
        <div className="flex items-center gap-5">
          <Image
            src={logo}
            className="w-[44px] h-[44px] object-cover border rounded-sm p-1"
            alt={`${name} logo`}
          />
          <div>
            <div className="text-[13px] text-text-tertiary">
              {name} &#x2022; {code}
            </div>
            <div className="text-lg uppercase">
              <span>{secondsToTime(startTime)}</span> -{" "}
              <span>{secondsToTime(endTime)}</span>
            </div>
          </div>
          <div className="ml-auto w-[174px] text-center">
            <div className="text-sm text-text-tertiary">
              {start} - {end}
            </div>
            <div className="text-lg">
              {timeDifferenceInHours(startTime, endTime)}
            </div>
          </div>
          <div className="w-[174px]">
            <div className="text-sm text-text-tertiary text-nowrap overflow-hidden truncate">
              {hasStops &&
                stops
                  .map((stop) => {
                    const stopCityName = AIRPORTS.find((airport) => {
                      return airport.code === stop.code;
                    })?.city;
                    return `${timeDifferenceInHours(
                      stop.landTime,
                      stop.takeOffTime
                    )} ${stopCityName}`;
                  })
                  .join(", ")}
            </div>
            <div className="text-lg">
              {hasStops ? `${stops.length} stops` : "Non stop"}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Image
            src={logo}
            className="w-[44px] h-[44px] object-cover border rounded-sm p-1"
            alt={`${name} logo`}
          />
          <div>
            <div className="text-[13px] text-text-tertiary">
              {name} &#x2022; {code}
            </div>
            <div className="text-lg uppercase">
              <span>{secondsToTime(startTime)}</span> -{" "}
              <span>{secondsToTime(endTime)}</span>
            </div>
          </div>
          <div className="ml-auto w-[174px] text-center">
            <div className="text-sm text-text-tertiary">
              {start} - {end}
            </div>
            <div className="text-lg">
              {timeDifferenceInHours(startTime, endTime)}
            </div>
          </div>
          <div className="w-[174px]">
            <div className="text-sm text-text-tertiary text-nowrap overflow-hidden truncate">
              {hasStops &&
                stops
                  .map((stop) => {
                    const stopCityName = AIRPORTS.find((airport) => {
                      return airport.code === stop.code;
                    })?.city;
                    return `${timeDifferenceInHours(
                      stop.landTime,
                      stop.takeOffTime
                    )} ${stopCityName}`;
                  })
                  .join(", ")}
            </div>
            <div className="text-lg">
              {hasStops ? `${stops.length} stops` : "Non stop"}
            </div>
          </div>
        </div>
      </div>
      <div className="border-l px-5 py-5 flex flex-col justify-end gap-2">
        <div className="flex flex-col">
          <span className="text-sm text-text-tertiary">from</span>
          <span className="text-xl">
            {currency} {formatPriceWithCommas(price)}
          </span>
        </div>
        <Button className="w-full">Select</Button>
      </div>
    </div>
  );
};

export default FlightCard;
