"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import searchIcon from "../../app/assets/icons/search.svg";
import switchIcon from "../../app/assets/icons/switch.svg";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import FlightOptionsDropdown from "./flight-options-dropdown";
import DatePicker from "./date-picker";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createSearchParams, getFlightFilterSearchParams } from "@/lib/helper";

const FormSchema = z.object({
  from: z.string().min(1, { message: "required" }),
  to: z.string().min(1, { message: "required" }),
  departureDate: z.number().min(1, { message: "required" }),
  returnDate: z.number().min(1, { message: "required" }),
});

interface SearchFlightFormProps {
  onClose?: () => void;
}
const SearchFlightForm = ({ onClose }: SearchFlightFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { from, to, departureDate, returnDate } =
    getFlightFilterSearchParams(searchParams);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      from: from || "",
      to: to || "",
      departureDate: departureDate || undefined,
      returnDate: returnDate || undefined,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (onClose) {
      onClose();
    }
    if (pathname.includes("/transport")) {
      router.replace(`/transport?${createSearchParams(data)}`);
    } else {
      router.push(`/transport?${createSearchParams(data)}`);
    }
  }

  const whereFromHandler = (value: string) => {
    form.setValue("from", value);
  };

  const whereToHandler = (value: string) => {
    form.setValue("to", value);
  };

  const departureDateHandler = (value: number) => {
    form.setValue("departureDate", value);
  };

  const returnDateHandler = (value: number) => {
    form.setValue("returnDate", value);
  };

  const fromValue = form.watch("from");
  const toValue = form.watch("to");
  const switchLocationsHandler = () => {
    form.setValue("from", toValue);

    form.setValue("to", fromValue);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <div className="flex items-center gap-3 flex-col lg:flex-row">
          <FormField
            control={form.control}
            name="from"
            render={({ field }) => (
              <FormItem className="w-full lg:w-auto">
                <FormControl>
                  <FlightOptionsDropdown
                    placeholder="Where from?"
                    onSelect={whereFromHandler}
                    isError={!!form.formState.errors.from}
                    value={field.value}
                    excludedCode={toValue}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="rounded-full w-13 h-13 bg-secondary p-0"
            variant="ghost"
            onClick={switchLocationsHandler}
            type="button"
          >
            <Image
              src={switchIcon}
              width={21}
              height={20}
              alt="switch icon"
              className="h-auto w-5"
            />
          </Button>
          <FormField
            control={form.control}
            name="to"
            render={({ field }) => (
              <FormItem className="w-full lg:w-auto">
                <FormControl>
                  <FlightOptionsDropdown
                    placeholder="Where to?"
                    onSelect={whereToHandler}
                    value={field.value}
                    isError={!!form.formState.errors.to}
                    excludedCode={fromValue}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div />
          <FormField
            control={form.control}
            name="departureDate"
            render={({ field }) => (
              <FormItem className="w-full lg:w-auto">
                <FormControl>
                  <DatePicker
                    placeholder="Departure"
                    onSelect={departureDateHandler}
                    value={field.value}
                    isError={!!form.formState.errors.departureDate}
                    disabled={{
                      before: new Date(),
                      after: new Date(form.watch("returnDate")),
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="returnDate"
            render={({ field }) => (
              <FormItem className="w-full lg:w-auto">
                <FormControl>
                  <DatePicker
                    placeholder="Return"
                    onSelect={returnDateHandler}
                    value={field.value}
                    isError={!!form.formState.errors.returnDate}
                    disabled={{
                      before: form.watch("departureDate")
                        ? new Date(form.watch("departureDate"))
                        : new Date(),
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="text-base font-medium w-full h-12 lg:w-[250px] gap-x-2.5 tracking-widest ml-auto"
        >
          <Image
            src={searchIcon}
            height={17}
            width={16}
            alt="search icon"
            className="h-auto w-4"
          />
          Search flights
        </Button>
      </form>
    </Form>
  );
};

export default SearchFlightForm;
