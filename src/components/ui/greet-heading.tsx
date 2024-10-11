"use client";

import { getGreetings } from "@/lib/date";
import { useEffect, useState } from "react";

const GreetHeading = () => {
  const [greetings, setGreetings] = useState("");

  useEffect(() => {
    setGreetings(getGreetings());
  }, []);
  return (
    <h1 className="text-3xl text-center lg:text-4xl text-text-dark mt-16">
      Good {greetings}, John Dane
    </h1>
  );
};

export default GreetHeading;
