import { getGreetings } from "@/lib/date";

const GreetHeading = () => {
  return (
    <h1 className="text-4xl text-text-dark mt-16">
      Good {getGreetings()}, John Dane
    </h1>
  );
};

export default GreetHeading;
