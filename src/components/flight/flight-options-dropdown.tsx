"use client";

import { ChevronDownIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Fragment, useState } from "react";
import Image from "next/image";
import markIcon from "../../app/assets/icons/mark.svg";
import { airportFilter } from "@/lib/helper";
import useSWR from "swr";
import { AIRPORT_KEY, getAirports } from "@/services/flight";
interface FlightOptionsDropdownProps {
  placeholder: string;
  onSelect: (value: string) => void;
  value: string;
  isError: boolean;
  excludedCode: string;
}
const FlightOptionsDropdown = ({
  placeholder,
  onSelect,
  value,
  isError,
  excludedCode,
}: FlightOptionsDropdownProps) => {
  const { data, isLoading } = useSWR(AIRPORT_KEY, getAirports);
  const [open, setOpen] = useState(false);

  const selectedAirport = data?.find((airport) => {
    return airport.code === value;
  });

  const selectAirportHandler = (currentValue: string) => {
    onSelect(currentValue);
    setOpen(false);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full lg:w-[267.5px] h-15 justify-between p-3",
            isError && "border-red-500"
          )}
        >
          <div className="text-text-secondary text-start font-normal">
            {value ? (
              <div className="flex gap-x-2.5 items-end">
                <Image
                  className="relative top-0.5 h-5 w-5"
                  src={markIcon}
                  width={20}
                  height={20}
                  alt="mark icon"
                />
                <div className="flex flex-col gap-y-2.5 text-text-tertiary w-42">
                  <span className="text-xs leading-none">{placeholder}</span>
                  <span className="text-base leading-none font-medium overflow-hidden text-ellipsis">
                    {isLoading ? (
                      "Loading..."
                    ) : (
                      <Fragment>
                        <span className="text-text-primary">
                          {selectedAirport?.code}
                        </span>{" "}
                        {selectedAirport?.name}
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-x-2.5">
                <Image
                  src={markIcon}
                  width={20}
                  height={20}
                  alt="mark icon"
                  className="w-5 h-5"
                />
                <span className="text-base w-42">{placeholder}</span>
              </div>
            )}
          </div>
          <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[267.5px] p-0">
        <Command filter={airportFilter}>
          <CommandInput placeholder="Search airports..." className="h-9" />
          <CommandList className="no-scrollbar">
            <CommandEmpty>
              {isLoading ? "Airports are loading.." : "No airports found"}
            </CommandEmpty>
            {data && (
              <CommandGroup>
                {data.map((airport) => {
                  if (excludedCode === airport.code) {
                    return null;
                  }
                  return (
                    <CommandItem
                      key={airport.code}
                      value={airport.code}
                      onSelect={selectAirportHandler}
                      className="cursor-pointer"
                    >
                      <Option {...airport} />
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

interface Airport {
  name: string;
  code: string;
  city: string;
  country: string;
}
const Option = ({ city, country, code }: Airport) => {
  return (
    <div className="flex items-center gap-2 justify-between w-full">
      <div className="flex flex-col">
        <span className="text-text-dark-2">{city}</span>
        <span className="text-text-secondary text-xs">{country}</span>
      </div>
      <span className="text-text-dark-2">{code}</span>
    </div>
  );
};

export default FlightOptionsDropdown;
