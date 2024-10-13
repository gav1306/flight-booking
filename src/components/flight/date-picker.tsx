"use client";
import { useState } from "react";
import { format } from "date-fns";
import calenderIcon from "../../app/assets/icons/calendar.svg";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Matcher } from "react-day-picker";
interface DatePickerProps {
  placeholder: string;
  value: number;
  onSelect: (value: number) => void;
  isError: boolean;
  disabled: Matcher;
}
const DatePicker = ({
  placeholder,
  value,
  onSelect,
  isError,
  disabled,
}: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  const dateSelectHandler = (value: Date | undefined) => {
    if (value) {
      onSelect(value.getTime());
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full lg:w-[177px] h-15 justify-between p-3",
            isError && "border-red-500"
          )}
        >
          <div className="text-text-secondary text-start font-normal">
            {value ? (
              <div className="flex gap-x-2.5 items-end">
                <Image
                  className="relative top-0.5 h-auto w-5"
                  src={calenderIcon}
                  width={20}
                  height={20}
                  alt="calender icon"
                />
                <div className="flex flex-col gap-y-2.5 text-text-tertiary">
                  <span className="text-xs leading-none">{placeholder}</span>
                  <span className="text-base leading-none font-medium overflow-hidden text-ellipsis">
                    <span className="text-text-primary">
                      {format(new Date(value), "dd/MM/yyyy")}
                    </span>
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-x-2.5 h-5 w-5">
                <Image
                  src={calenderIcon}
                  width={20}
                  height={20}
                  className="w-5 h-auto"
                  alt="calender icon"
                />
                <span className="text-base">{placeholder}</span>
              </div>
            )}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="flex w-auto flex-col space-y-2 p-2"
      >
        <Calendar
          mode="single"
          selected={new Date(value)}
          onSelect={dateSelectHandler}
          disabled={disabled}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
