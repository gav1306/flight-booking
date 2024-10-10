import { v4 as uuidv4 } from "uuid";
import emiratesLogo from "../app/assets/logos/emirates.png";
import lufthansaLogo from "../app/assets/logos/lufthansa.png";
import { StaticImageData } from "next/image";

export enum TICKET_CLASS {
  ECONOMY = "economy",
  PREMIUM_ECONOMY = "premium_economy",
  BUSINESS = "business",
  FIRST = "first",
}

export enum WEEK_DAYS {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
}

export interface Flight {
  id: string;
  name: string;
  code: string;
  logo: StaticImageData;
  start: string;
  end: string;
  startTime: number;
  endTime: number;
  travelClass: TICKET_CLASS;
  price: number;
  currency: string;
  stops: {
    code: string;
    landTime: number;
    takeOffTime: number;
  }[];
  availableDays: WEEK_DAYS[];
}

export const FLIGHTS: Flight[] = [
  {
    id: uuidv4(),
    name: "Emirates",
    code: "EK 202",
    logo: emiratesLogo,
    start: "DEL",
    end: "DXB",
    startTime: 43200, // 12:00 PM
    endTime: 82800, // 11:00 PM
    travelClass: TICKET_CLASS.BUSINESS,
    price: 4500,
    currency: "AED",
    stops: [
      {
        code: "LHR",
        landTime: 64800, // 6:00 PM
        takeOffTime: 68400, // 7:00 PM
      },
      {
        code: "SIN", // Changed AMS to SIN
        landTime: 72000, // 8:00 PM
        takeOffTime: 75600, // 9:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.WEDNESDAY, WEEK_DAYS.FRIDAY],
  },
  {
    id: uuidv4(),
    name: "Lufthansa",
    code: "LH 469",
    logo: lufthansaLogo,
    start: "DXB",
    end: "DEL",
    startTime: 54000, // 3:00 PM
    endTime: 93600, // 2:00 AM (next day)
    travelClass: TICKET_CLASS.BUSINESS,
    price: 6000,
    currency: "AED",
    stops: [
      {
        code: "HND",
        landTime: 64800, // 6:00 PM
        takeOffTime: 68400, // 7:00 PM
      },
      {
        code: "JFK",
        landTime: 79200, // 10:00 PM
        takeOffTime: 82800, // 11:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.THURSDAY, WEEK_DAYS.SUNDAY, WEEK_DAYS.MONDAY],
  },
  {
    id: uuidv4(),
    name: "Qatar Airways",
    code: "QR 301",
    logo: emiratesLogo,
    start: "DEL",
    end: "DXB",
    startTime: 54540, // 3:09 PM (hours and minutes in seconds)
    endTime: 86400, // 12:00 AM (next day)
    travelClass: TICKET_CLASS.ECONOMY,
    price: 2100,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.FRIDAY, WEEK_DAYS.SUNDAY],
  },
  {
    id: uuidv4(),
    name: "Etihad",
    code: "EY 150",
    logo: lufthansaLogo,
    start: "DXB",
    end: "DEL",
    startTime: 30120, // 8:22 AM
    endTime: 68400, // 7:00 PM
    travelClass: TICKET_CLASS.FIRST,
    price: 9000,
    currency: "AED",
    stops: [
      {
        code: "SIN",
        landTime: 50400, // 2:00 PM
        takeOffTime: 54000, // 3:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.THURSDAY, WEEK_DAYS.SATURDAY],
  },
  {
    id: uuidv4(),
    name: "Lufthansa",
    code: "LH 903",
    logo: lufthansaLogo,
    start: "FRA",
    end: "NRT",
    startTime: 33600, // 9:20 AM
    endTime: 72600, // 8:10 PM
    travelClass: TICKET_CLASS.PREMIUM_ECONOMY,
    price: 3200,
    currency: "AED",
    stops: [
      {
        code: "HND", // Changed HKG to HND
        landTime: 61620, // 5:07 PM
        takeOffTime: 66000, // 6:20 PM
      },
    ],
    availableDays: [WEEK_DAYS.TUESDAY, WEEK_DAYS.THURSDAY],
  },
  {
    id: uuidv4(),
    name: "Qatar Airways",
    code: "QR 848",
    logo: lufthansaLogo,
    start: "DOH",
    end: "SFO",
    startTime: 39600, // 11:00 AM
    endTime: 90000, // 1:00 AM (next day)
    travelClass: TICKET_CLASS.BUSINESS,
    price: 5800,
    currency: "AED",
    stops: [
      {
        code: "LHR",
        landTime: 61200, // 5:00 PM
        takeOffTime: 64800, // 6:00 PM
      },
      {
        code: "JFK", // Changed ORD to JFK
        landTime: 75600, // 9:00 PM
        takeOffTime: 79200, // 10:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.FRIDAY, WEEK_DAYS.MONDAY],
  },
  {
    id: uuidv4(),
    name: "British Airways",
    code: "BA 786",
    logo: lufthansaLogo,
    start: "LHR",
    end: "LAX",
    startTime: 47100, // 1:05 PM
    endTime: 82800, // 11:00 PM
    travelClass: TICKET_CLASS.BUSINESS,
    price: 5800,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.WEDNESDAY, WEEK_DAYS.FRIDAY],
  },
  {
    id: uuidv4(),
    name: "Singapore Airlines",
    code: "SQ 401",
    logo: lufthansaLogo,
    start: "SIN",
    end: "JFK",
    startTime: 40260, // 11:11 AM
    endTime: 79920, // 10:12 PM
    travelClass: TICKET_CLASS.FIRST,
    price: 13000,
    currency: "AED",
    stops: [
      {
        code: "DXB",
        landTime: 65220, // 6:07 PM
        takeOffTime: 69000, // 7:10 PM
      },
    ],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.WEDNESDAY, WEEK_DAYS.FRIDAY],
  },
  {
    id: uuidv4(),
    name: "Air France",
    code: "AF 201",
    logo: lufthansaLogo,
    start: "CDG",
    end: "LAX",
    startTime: 50400, // 2:00 PM
    endTime: 83340, // 11:09 PM
    travelClass: TICKET_CLASS.ECONOMY,
    price: 1150,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.FRIDAY, WEEK_DAYS.SUNDAY],
  },
  {
    id: uuidv4(),
    name: "Qantas",
    code: "QF 73",
    logo: lufthansaLogo,
    start: "SYD",
    end: "SFO",
    startTime: 64800, // 6:00 PM
    endTime: 79200, // 10:00 PM
    travelClass: TICKET_CLASS.PREMIUM_ECONOMY,
    price: 3700,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.WEDNESDAY],
  },
];
