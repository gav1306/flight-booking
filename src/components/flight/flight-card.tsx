import { AIRPORTS } from "@/data/airports";
import { Flight } from "@/data/flights";
import { secondsToTime, timeDifferenceInHours } from "@/lib/date";
import { formatPriceWithCommas } from "@/lib/helper";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import FlightTimelineDrawer from "./flight-timeline-drawer";

type FlightCardProps = { departure: Flight; back: Flight };

const FlightCard = ({ departure, back }: FlightCardProps) => {
  return (
    <div className="rounded-md border grid sm:grid-cols-[1fr_214px]">
      <div className="px-5 pl-7 py-5 flex flex-col gap-4 lg:gap-12 justify-center">
        {departure && (
          <div className="flex items-center gap-5">
            <Image
              src={departure.logo}
              className="w-[44px] h-auto object-cover border rounded-sm p-1"
              alt={`${departure.name} logo`}
            />
            <div>
              <div className="text-[13px] text-text-tertiary">
                {departure.name} &#x2022; {departure.code}
              </div>
              <div className="text-lg uppercase">
                <span>{secondsToTime(departure.startTime)}</span> -{" "}
                <span>{secondsToTime(departure.endTime)}</span>
              </div>
            </div>
            <div className="hidden lg:block lg:ml-auto lg:w-[174px] lg:text-center">
              <div className="text-sm text-text-tertiary">
                {departure.start} - {departure.end}
              </div>
              <div className="text-lg">
                {timeDifferenceInHours(departure.startTime, departure.endTime)}
              </div>
            </div>
            <div className="hidden lg:block lg:w-[174px]">
              <div className="text-sm text-text-tertiary text-nowrap overflow-hidden truncate">
                {!!departure.stops.length &&
                  departure.stops
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
                {!!departure.stops.length
                  ? `${departure.stops.length} stops`
                  : "Non stop"}
              </div>
            </div>
          </div>
        )}
        {back && (
          <div className="flex items-center gap-5">
            <Image
              src={back.logo}
              className="w-[44px] h-auto object-cover border rounded-sm p-1"
              alt={`${back.name} logo`}
            />
            <div>
              <div className="text-[13px] text-text-tertiary">
                {back.name} &#x2022; {back.code}
              </div>
              <div className="text-lg uppercase">
                <span>{secondsToTime(back.startTime)}</span> -{" "}
                <span>{secondsToTime(back.endTime)}</span>
              </div>
            </div>
            <div className="hidden lg:block lg:ml-auto lg:w-[174px] lg:text-center">
              <div className="text-sm text-text-tertiary">
                {back.start} - {back.end}
              </div>
              <div className="text-lg">
                {timeDifferenceInHours(back.startTime, back.endTime)}
              </div>
            </div>
            <div className=" hidden lg:block lg:w-[174px]">
              <div className="text-sm text-text-tertiary text-nowrap overflow-hidden truncate">
                {!!back.stops.length &&
                  back.stops
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
                {back.stops.length ? `${back.stops.length} stops` : "Non stop"}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="border-l px-5 py-5 flex flex-col justify-end gap-2">
        {(departure || back) && (
          <>
            <div className="flex flex-col">
              <span className="text-sm text-text-tertiary">from</span>
              <span className="text-xl">
                {departure?.currency || back?.currency}{" "}
                {formatPriceWithCommas(
                  departure?.price || 0 + back?.price || 0
                )}
              </span>
            </div>
            <FlightTimelineDrawer departure={departure} back={back}>
              <Button className="w-full">Select</Button>
            </FlightTimelineDrawer>
          </>
        )}
      </div>
    </div>
  );
};

export default FlightCard;
