"use client";

import { ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";

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
import { useState } from "react";
import Image from "next/image";
import markIcon from "../../app/assets/icons/mark.svg";
import { airportFilter } from "@/lib/helper";
import useSWR from "swr";
import { AIRPORT_KEY, getAirports } from "@/app/services/flight";
interface FlightOptionsDropdownProps {
  placeholder: string;
}
const FlightOptionsDropdown = ({ placeholder }: FlightOptionsDropdownProps) => {
  const { data, isLoading } = useSWR(AIRPORT_KEY, getAirports);
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");

  const selectedAirport = data?.find((airport) => {
    return airport.code === code;
  });

  const selectAirportHandler = (currentValue: string) => {
    setCode(currentValue === code ? "" : currentValue);
    setOpen(false);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[267.5px] h-15 justify-between p-3"
        >
          <div className="text-text-secondary text-start font-normal">
            {code ? (
              <div className="flex gap-x-2.5 items-end">
                <Image
                  className="relative top-0.5"
                  src={markIcon}
                  width={20}
                  height={20}
                  alt="mark icon"
                />
                <div className="flex flex-col gap-y-2.5 text-text-tertiary w-42">
                  <span className="text-xs leading-none">{placeholder}</span>
                  <span className="text-base leading-none font-medium overflow-hidden text-ellipsis">
                    <span className="text-text-primary">
                      {selectedAirport?.code}
                    </span>{" "}
                    {selectedAirport?.name}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-x-2.5">
                <Image src={markIcon} width={20} height={20} alt="mark icon" />
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
          <CommandList>
            <CommandEmpty>
              {isLoading ? "Airports are loading.." : "No airports found"}
            </CommandEmpty>
            {data && (
              <CommandGroup>
                {data.map((airport) => (
                  <CommandItem
                    key={airport.code}
                    value={airport.code}
                    onSelect={selectAirportHandler}
                    className="cursor-pointer"
                  >
                    {airport.name}
                    <CheckIcon
                      className={cn(
                        "ml-auto w-4 h-4",
                        code === airport.code ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FlightOptionsDropdown;
