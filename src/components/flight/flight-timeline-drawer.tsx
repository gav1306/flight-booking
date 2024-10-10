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

interface FlightTimelineDrawerProps {
  children: React.ReactNode;
}
const FlightTimelineDrawer = ({ children }: FlightTimelineDrawerProps) => {
  const [open, setOpen] = useState(false);

  const closeSheetHandler = () => {
    setOpen(false);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="min-w-[45dvw] max-w-[659px] h-[calc(100dvh-32px)] top-[16px] rounded-lg">
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
        <SheetHeader>
          <SheetTitle>Flight details</SheetTitle>
          <SheetDescription className="sr-only">
            Flight timeline
          </SheetDescription>
        </SheetHeader>
        <div>
          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-text-dark">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="rounded-full w-3 h-3 border-[1.2px] border-text-dark"></div>
              </div>
            </div>
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white"></h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                Find more detailed insctructions here.
              </p>
              <button
                type="button"
                className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                James Collins
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FlightTimelineDrawer;
