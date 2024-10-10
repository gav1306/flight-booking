import SearchFlight from "./search-flight";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SearchFlightCard = () => {
  return (
    <Card className="flex lg:w-[1057px] flex-col p-7 gap-6">
      <CardHeader className="p-0">
        <CardTitle>
          <div className="w-32 h-9 font-medium text-text-dark text-base bg-secondary rounded-md flex items-center justify-center tracking-wide">
            Flights
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <SearchFlight />
      </CardContent>
    </Card>
  );
};

export default SearchFlightCard;
