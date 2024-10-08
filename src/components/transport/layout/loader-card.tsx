"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import loaderIcon from "../../../app/assets/icons/loader.svg";

import { lazy, useEffect, useState } from "react";
import Image from "next/image";

const PaperPlaneAnimation = lazy(() => import("./paper-plane-animation"));

const INITIAL_LOADING_MESSAGES = [
  {
    name: "Searching 400+ flights",
    isLoading: true,
    isCompleted: false,
  },
  {
    name: "Attaching company rules",
    isLoading: false,
    isCompleted: false,
  },
  {
    name: "Serving best results",
    isLoading: false,
    isCompleted: false,
  },
];

const LoaderCard = () => {
  const [loadingMessages, setLoadingMessages] = useState(
    INITIAL_LOADING_MESSAGES
  );

  useEffect(() => {
    loadingMessages.forEach((_, index) => {
      const timerIncrement = 3000 * (index + 1);

      setTimeout(() => {
        setLoadingMessages((prevState) => {
          const updatedMessages = [...prevState];

          updatedMessages[index].isLoading = false;
          updatedMessages[index].isCompleted = true;
          if (updatedMessages[index + 1]) {
            updatedMessages[index + 1].isLoading = true;
          }
          return updatedMessages;
        });
      }, timerIncrement);
    });
  }, []);

  return (
    <Card className="w-[323px] rounded-2xl p-4 absolute top-[100px] left-[50%] translate-x-[-50%]">
      <CardTitle className="sr-only">Loading</CardTitle>
      <CardDescription className="sr-only">
        Your flights are loading
      </CardDescription>
      <CardContent className="flex flex-col items-center justify-center p-0">
        <PaperPlaneAnimation />
        <ul className="flex flex-col gap-4">
          {loadingMessages.map((message, index) => {
            const isDisabled = !message.isLoading && !message.isCompleted;

            return (
              <li
                key={index}
                className="flex items-center gap-3 tracking-wider relative"
              >
                <div className="h-[18px] w-[18px] absolute left-[-30px]">
                  {isDisabled ? (
                    <></>
                  ) : message.isLoading ? (
                    <Image
                      src={loaderIcon}
                      width={18}
                      height={18}
                      className="h-[18px] w-[18px]"
                      alt="loader icon"
                    />
                  ) : (
                    <CheckCircledIcon width={18} height={18} color="#096B2B" />
                  )}
                </div>
                <span
                  className={cn(
                    "text-text-tertiary text-lg",
                    isDisabled && "text-text-disabled"
                  )}
                >
                  {message.name}
                </span>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default LoaderCard;
