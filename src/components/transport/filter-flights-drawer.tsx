import SearchFlightForm from "@/components/flight/search-flight";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useState } from "react";
interface FilterFlightsDrawerProps {
  children: React.ReactNode;
}
const FilterFlightsDrawer = ({ children }: FilterFlightsDrawerProps) => {
  const [open, setOpen] = useState(false);

  const closeDrawerHandler = () => {
    setOpen(false);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="w-full lg:w-auto">{children}</SheetTrigger>
      <SheetContent side="top">
        <SheetTitle className="sr-only">Flight filters</SheetTitle>
        <SheetDescription className="sr-only">
          Search for flights
        </SheetDescription>
        <div className="max-w-[1000px] m-auto pt-10">
          <SearchFlightForm onClose={closeDrawerHandler} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterFlightsDrawer;
