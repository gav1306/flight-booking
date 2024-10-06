import GreetHeading from "@/components/ui/greet-heading";
import SearchFlightCard from "@/components/flight/search-flight-card";

export default function Home() {
  return (
    <section className="max-w-content m-auto p-5.5 flex flex-col items-center gap-8">
      <GreetHeading />
      <SearchFlightCard />
    </section>
  );
}
