import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Image from "next/image";
import arrowLeftIcon from "../../app/assets/icons/arrow-left.svg";
import { useState } from "react";
import { Flight } from "@/data/flights";
import { useSearchParams } from "next/navigation";
import {
  getDateFromTimeStamp,
  secondsToTime,
  timeDifferenceInHours,
} from "@/lib/date";
import { AIRPORTS } from "@/data/airports";
import { ClockIcon } from "@radix-ui/react-icons";

interface FlightTimelineDrawerProps {
  children: React.ReactNode;
  departure: Flight;
  back: Flight;
}
const FlightTimelineDrawer = ({
  children,
  departure,
  back,
}: FlightTimelineDrawerProps) => {
  const searchParams = useSearchParams();
  const departureDate = +searchParams.get("departureDate")!;
  const returnDate = +searchParams.get("returnDate")!;

  const [open, setOpen] = useState(false);

  const closeSheetHandler = () => {
    setOpen(false);
  };

  const departureStartAirport = AIRPORTS.find((airport) => {
    return airport.code === departure?.start;
  });

  const departureEndAirport = AIRPORTS.find((airport) => {
    return airport.code === departure?.end;
  });

  const backStartAirport = AIRPORTS.find((airport) => {
    return airport.code === back?.start;
  });

  const backEndAirport = AIRPORTS.find((airport) => {
    return airport.code === back?.end;
  });

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="min-w-[45dvw] max-w-[659px] h-[calc(100dvh-32px)] top-[16px] rounded-lg overflow-y-scroll">
        <Button
          className="rounded-full w-7 h-7 p-0 bg-secondary"
          variant="ghost"
          onClick={closeSheetHandler}
        >
          <Image
            src={arrowLeftIcon}
            width={16}
            height={16}
            alt="switch icon"
            className="h-auto w-4"
          />
        </Button>
        <SheetHeader className="py-6 border-b mb-4">
          <SheetTitle className="text-xl font-medium tracking-wider">
            Flight details
          </SheetTitle>
          <SheetDescription className="sr-only">
            Flight timeline
          </SheetDescription>
        </SheetHeader>
        <div className="relative">
          <div>
            {departure && (
              <>
                <h2 className="text-text-secondary mb-3">Departure</h2>
                <div className="flex gap-x-3">
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-text-dark">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="rounded-full w-3 h-3 border-[1.2px] border-text-dark"></div>
                    </div>
                  </div>
                  <div className="grow pb-10 flex flex-col gap-1">
                    <p className="text-xs text-text-tertiary">
                      {getDateFromTimeStamp(departureDate)} &#x2022;{" "}
                      {secondsToTime(departure.startTime)}
                    </p>
                    <p className="font-medium w-52">
                      {departure.code} &#x2022; {departureStartAirport?.name}
                    </p>
                  </div>
                </div>
                {!!departure.stops.length &&
                  departure.stops.map((stop, index) => {
                    const stopAirport = AIRPORTS.find((airport) => {
                      return airport.code === stop.code;
                    });
                    return (
                      <div key={index}>
                        <div className="flex gap-x-3">
                          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:border-l after:border-text-tertiary after:border-dashed">
                            <div className="relative z-10 size-7 flex justify-center items-center">
                              <div className="rounded-full w-3 h-3 border-[1.2px] border-text-dark"></div>
                            </div>
                          </div>
                          <div className="grow pb-10 flex flex-col gap-1">
                            <p className="text-xs text-text-tertiary">
                              {getDateFromTimeStamp(departureDate)} &#x2022;{" "}
                              {secondsToTime(stop.landTime)}
                            </p>
                            <p className="font-medium w-52">
                              {stop.code} &#x2022; {stopAirport?.name}
                            </p>
                            <div className="text-text-tertiary flex items-center gap-2 pt-8 ml-6">
                              <ClockIcon
                                width={14}
                                height={14}
                                fill="#787b80"
                              />
                              <span>
                                Layover{" "}
                                {timeDifferenceInHours(
                                  stop.landTime,
                                  stop.takeOffTime
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-x-3">
                          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-text-dark">
                            <div className="relative z-10 size-7 flex justify-center items-center">
                              <div className="rounded-full w-3 h-3 border-[1.2px] border-text-dark"></div>
                            </div>
                          </div>

                          <div className="grow pb-10 flex flex-col gap-1">
                            <p className="text-xs text-text-tertiary">
                              {getDateFromTimeStamp(departureDate)} &#x2022;{" "}
                              {secondsToTime(stop.takeOffTime)}
                            </p>
                            <p className="font-medium w-52">
                              {stop.code} &#x2022; {stopAirport?.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <div className="flex gap-x-3">
                  <div className="relative last:after:hidden">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="rounded-full w-3 h-3 border-[1.2px] border-text-dark"></div>
                    </div>
                  </div>
                  <div className="grow pb-10 flex flex-col gap-1">
                    <p className="text-xs text-text-tertiary">
                      {getDateFromTimeStamp(departureDate)} &#x2022;{" "}
                      {secondsToTime(departure.endTime)}
                    </p>
                    <p className="font-medium w-52">
                      {departure.code} &#x2022; {departureEndAirport?.name}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div>
            {back && (
              <>
                <h2 className="text-text-secondary mb-3">Return</h2>
                <div className="flex gap-x-3">
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-text-dark">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="rounded-full w-3 h-3 border-[1.2px] border-text-dark"></div>
                    </div>
                  </div>
                  <div className="grow pb-10 flex flex-col gap-1">
                    <p className="text-xs text-text-tertiary">
                      {getDateFromTimeStamp(returnDate)} &#x2022;{" "}
                      {secondsToTime(back.startTime)}
                    </p>
                    <p className="font-medium w-52">
                      {back.code} &#x2022; {backStartAirport?.name}
                    </p>
                  </div>
                </div>
                {!!back.stops.length &&
                  back.stops.map((stop, index) => {
                    const stopAirport = AIRPORTS.find((airport) => {
                      return airport.code === stop.code;
                    });
                    return (
                      <div key={index}>
                        <div className="flex gap-x-3">
                          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:border-l after:border-text-tertiary after:border-dashed">
                            <div className="relative z-10 size-7 flex justify-center items-center">
                              <div className="rounded-full w-3 h-3 border-[1.2px] border-text-dark"></div>
                            </div>
                          </div>
                          <div className="grow pb-10 flex flex-col gap-1">
                            <p className="text-xs text-text-tertiary">
                              {getDateFromTimeStamp(returnDate)} &#x2022;{" "}
                              {secondsToTime(stop.landTime)}
                            </p>
                            <p className="font-medium w-52">
                              {stop.code} &#x2022; {stopAirport?.name}
                            </p>
                            <div className="text-text-tertiary flex items-center gap-2 pt-8 ml-6">
                              <ClockIcon
                                width={14}
                                height={14}
                                fill="#787b80"
                              />
                              <span>
                                Layover{" "}
                                {timeDifferenceInHours(
                                  stop.landTime,
                                  stop.takeOffTime
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-x-3">
                          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-text-dark">
                            <div className="relative z-10 size-7 flex justify-center items-center">
                              <div className="rounded-full w-3 h-3 border-[1.2px] border-text-dark"></div>
                            </div>
                          </div>

                          <div className="grow pb-10 flex flex-col gap-1">
                            <p className="text-xs text-text-tertiary">
                              {getDateFromTimeStamp(returnDate)} &#x2022;{" "}
                              {secondsToTime(stop.takeOffTime)}
                            </p>
                            <p className="font-medium w-52">
                              {stop.code} &#x2022; {stopAirport?.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <div className="flex gap-x-3">
                  <div className="relative last:after:hidden">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="rounded-full w-3 h-3 border-[1.2px] border-text-dark"></div>
                    </div>
                  </div>
                  <div className="grow pb-10 flex flex-col gap-1">
                    <p className="text-xs text-text-tertiary">
                      {getDateFromTimeStamp(returnDate)} &#x2022;{" "}
                      {secondsToTime(back.endTime)}
                    </p>
                    <p className="font-medium w-52">
                      {back.code} &#x2022; {backEndAirport?.name}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
          {departure && (
            <div className="absolute top-14 right-0 text-text-secondary flex items-start gap-4 text-xs">
              <Image
                src={departure.logo}
                width={28}
                height={28}
                className="w-7 h-auto border rounded-sm"
                alt={`${departure.name} logo`}
              />
              <ul className="flex flex-col gap-0.5 tracking-wide">
                <li>
                  {departure.name} &#x2022; {departure.code}
                </li>
                <li className="capitalize">{departure.travelClass}</li>
                <li>
                  Flight time{" "}
                  {timeDifferenceInHours(
                    departure.startTime,
                    departure.endTime
                  )}
                </li>
              </ul>
            </div>
          )}
          {back && (
            <div className="absolute bottom-14 right-0 text-text-secondary flex items-start gap-4 text-xs">
              <Image
                src={back.logo}
                width={28}
                height={28}
                className="w-7 h-auto border rounded-sm"
                alt={`${back.name} logo`}
              />
              <ul className="flex flex-col gap-0.5 tracking-wide">
                <li>
                  {back.name} &#x2022; {back.code}
                </li>
                <li className="capitalize">{back.travelClass}</li>
                <li>
                  Flight time{" "}
                  {timeDifferenceInHours(back.startTime, back.endTime)}
                </li>
              </ul>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FlightTimelineDrawer;
