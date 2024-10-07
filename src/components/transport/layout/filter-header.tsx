"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import searchIcon from "../../../app/assets/icons/search-dark.svg";
import closeIcon from "../../../app/assets/icons/close.svg";
import { useRouter } from "next/navigation";

const FilterHeader = () => {
  const router = useRouter();

  const onCloseHandler = () => {
    router.push("/");
  };
  return (
    <header>
      <div className="w-[1200px] flex items-center justify-between py-6 px-12 m-auto">
        <div className="flex p-3 border-2 items-center justify-between rounded-[32px] gap-4 tracking-wider">
          <span className="text-base text-text-tertiary max-w-[200px] truncate">
            <span className="text-text-primary font-medium">CDG</span> Paris
            Charles De Gahye
          </span>
          <Separator orientation="vertical" className="h-[26px]" />
          <span className="text-base text-text-tertiary max-w-[200px] truncate">
            <span className="text-text-primary font-medium">DCG</span> Dubai
            International Airport
          </span>
          <Separator orientation="vertical" className="h-[26px]" />
          <span className="font-medium">Jul 25-Jul 2</span>
          <Separator orientation="vertical" className="h-[26px]" />
          <Button className="w-9 h-9 rounded-full p-0 bg-button-secondary hover:bg-secondary">
            <Image
              src={searchIcon}
              width={16}
              height={16}
              alt="search icon"
              className="w-4 h-4"
            />
          </Button>
        </div>

        <Button
          className="h-11 w-11 rounded-full p-0"
          variant="outline"
          onClick={onCloseHandler}
        >
          <Image
            src={closeIcon}
            width={20}
            height={20}
            alt="close icon"
            className="h-5 w-5"
          />
        </Button>
      </div>
    </header>
  );
};

export default FilterHeader;
