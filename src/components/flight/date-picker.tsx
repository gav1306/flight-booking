"use client";
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
interface DatePickerProps {
  placeholder: string;
  value: number;
  onSelect: (value: number) => void;
  isError: boolean;
}
const DatePicker = ({
  placeholder,
  value,
  onSelect,
  isError,
}: DatePickerProps) => {
  const dateSelectHandler = (value: Date | undefined) => {
    if (value) {
      onSelect(value.getTime());
    }
  };

  console.log(value);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[177px] h-15 justify-between p-3",
            isError && "border-red-500"
          )}
        >
          <div className="text-text-secondary text-start font-normal">
            {value ? (
              <div className="flex gap-x-2.5 items-end">
                <Image
                  className="relative top-0.5"
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
              <div className="flex items-center gap-x-2.5">
                <Image
                  src={calenderIcon}
                  width={20}
                  height={20}
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
        <div className="rounded-md border">
          <Calendar
            mode="single"
            selected={new Date(value)}
            onSelect={dateSelectHandler}
            disabled={{ before: new Date() }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
