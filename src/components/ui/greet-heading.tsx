import { getGreetings } from "@/lib/date";

const GreetHeading = () => {
  return <h1 className="text-4xl">Good {getGreetings()}, John Dane</h1>;
};

export default GreetHeading;
