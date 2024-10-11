import { Suspense } from "react";
import SearchFlight from "./search-flight";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "./loading";

const SearchFlightCard = () => {
  return (
    <Card className="flex sm:w-[500px] lg:w-[1057px] flex-col p-7 gap-6">
      <CardHeader className="p-0">
        <CardTitle>
          <div className="w-32 h-9 font-medium text-text-dark text-base bg-secondary rounded-md flex items-center justify-center tracking-wide">
            Flights
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <Suspense fallback={<Loading />}>
          <SearchFlight />
        </Suspense>
      </CardContent>
    </Card>
  );
};

export default SearchFlightCard;
