"use client";
import { addDays, format } from "date-fns";
import calenderIcon from "../../app/assets/icons/calendar.svg";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Image from "next/image";
interface DatePickerProps {
  placeholder: string;
}
const DatePicker = ({ placeholder }: DatePickerProps) => {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className="w-[267.5px] h-15 justify-between p-3"
        >
          <div className="text-text-secondary text-start font-normal">
            {date ? (
              <div className="flex gap-x-2.5 items-end">
                <Image
                  className="relative top-0.5"
                  src={calenderIcon}
                  width={20}
                  height={20}
                  alt="calender icon"
                />
                <div className="flex flex-col gap-y-2.5 text-text-tertiary w-42">
                  <span className="text-xs leading-none">{placeholder}</span>
                  <span className="text-base leading-none font-medium overflow-hidden text-ellipsis">
                    <span className="text-text-primary">
                      {format(date, "MM/dd/yyyy")}
                    </span>
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-x-2.5">
                <Image
                  src={calenderIcon}
                  width={20}
                  height={20}
                  alt="calender icon"
                />
                <span className="text-base w-42">{placeholder}</span>
              </div>
            )}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="flex w-auto flex-col space-y-2 p-2"
      >
        <Select
          onValueChange={(value) =>
            setDate(addDays(new Date(), parseInt(value)))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
