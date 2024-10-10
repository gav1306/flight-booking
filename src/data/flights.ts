import { v4 as uuidv4 } from "uuid";
import emiratesLogo from "../app/assets/logos/emirates.png";
import lufthansaLogo from "../app/assets/logos/lufthansa.png";

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

export const FLIGHTS = [
  {
    id: uuidv4(),
    name: "Emirates",
    code: "EK 202",
    logo: emiratesLogo,
    start: "DXB",
    end: "JFK",
    startTime: 43200, // 12:00 PM
    endTime: 82800, // 11:00 PM
    class: TICKET_CLASS.BUSINESS,
    price: 4500,
    currency: "AED",
    stops: [
      {
        code: "LHR",
        landTime: 64800, // 6:00 PM
        takeOffTime: 68400, // 7:00 PM
      },
      {
        code: "AMS",
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
    start: "FRA",
    end: "LAX",
    startTime: 54000, // 3:00 PM
    endTime: 93600, // 2:00 AM (next day)
    class: TICKET_CLASS.BUSINESS,
    price: 6000,
    currency: "AED",
    stops: [
      {
        code: "CDG",
        landTime: 64800, // 6:00 PM
        takeOffTime: 68400, // 7:00 PM
      },
      {
        code: "JFK",
        landTime: 79200, // 10:00 PM
        takeOffTime: 82800, // 11:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.THURSDAY, WEEK_DAYS.SUNDAY],
  },
  {
    id: uuidv4(),
    name: "Qatar Airways",
    code: "QR 301",
    logo: emiratesLogo,
    start: "DOH",
    end: "SFO",
    startTime: 54540, // 3:09 PM (hours and minutes in seconds)
    endTime: 86400, // 12:00 AM (next day)
    class: TICKET_CLASS.ECONOMY,
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
    start: "AUH",
    end: "SYD",
    startTime: 30120, // 8:22 AM
    endTime: 68400, // 7:00 PM
    class: TICKET_CLASS.FIRST,
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
    class: TICKET_CLASS.PREMIUM_ECONOMY,
    price: 3200,
    currency: "AED",
    stops: [
      {
        code: "HKG",
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
    class: TICKET_CLASS.BUSINESS,
    price: 5800,
    currency: "AED",
    stops: [
      {
        code: "LHR",
        landTime: 61200, // 5:00 PM
        takeOffTime: 64800, // 6:00 PM
      },
      {
        code: "ORD",
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
    class: TICKET_CLASS.BUSINESS,
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
    class: TICKET_CLASS.FIRST,
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
    class: TICKET_CLASS.ECONOMY,
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
    class: TICKET_CLASS.PREMIUM_ECONOMY,
    price: 3700,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.WEDNESDAY],
  },
  {
    id: uuidv4(),
    name: "Emirates",
    code: "EK 525",
    logo: lufthansaLogo,
    start: "DXB",
    end: "LAX",
    startTime: 32400, // 9:00 AM
    endTime: 84600, // 11:30 PM
    class: TICKET_CLASS.FIRST,
    price: 8200,
    currency: "AED",
    stops: [
      {
        code: "IST",
        landTime: 54000, // 3:00 PM
        takeOffTime: 57600, // 4:00 PM
      },
      {
        code: "JFK",
        landTime: 68400, // 7:00 PM
        takeOffTime: 72000, // 8:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.WEDNESDAY],
  },
  {
    id: uuidv4(),
    name: "American Airlines",
    code: "AA 100",
    logo: lufthansaLogo,
    start: "JFK",
    end: "LHR",
    startTime: 43200, // 12:00 PM
    endTime: 79200, // 10:00 PM
    class: TICKET_CLASS.BUSINESS,
    price: 5900,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.TUESDAY, WEEK_DAYS.THURSDAY],
  },
  {
    id: uuidv4(),
    name: "KLM",
    code: "KL 809",
    logo: lufthansaLogo,
    start: "AMS",
    end: "BKK",
    startTime: 57600, // 4:00 PM
    endTime: 82800, // 11:00 PM
    class: TICKET_CLASS.BUSINESS,
    price: 5800,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.SATURDAY, WEEK_DAYS.SUNDAY],
  },
  {
    id: uuidv4(),
    name: "Turkish Airlines",
    code: "TK 2156",
    logo: lufthansaLogo,
    start: "IST",
    end: "LAX",
    startTime: 54000, // 3:00 PM
    endTime: 84600, // 11:30 PM
    class: TICKET_CLASS.BUSINESS,
    price: 6200,
    currency: "AED",
    stops: [
      {
        code: "CDG",
        landTime: 66600, // 6:30 PM
        takeOffTime: 70200, // 7:30 PM
      },
    ],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.WEDNESDAY],
  },
  {
    id: uuidv4(),
    name: "Delta Airlines",
    code: "DL 156",
    logo: lufthansaLogo,
    start: "ATL",
    end: "JFK",
    startTime: 39600, // 11:00 AM
    endTime: 43200, // 12:00 PM
    class: TICKET_CLASS.ECONOMY,
    price: 300,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.FRIDAY, WEEK_DAYS.SUNDAY],
  },
  {
    id: uuidv4(),
    name: "Swiss International",
    code: "LX 88",
    logo: lufthansaLogo,
    start: "ZRH",
    end: "SFO",
    startTime: 48600, // 1:30 PM
    endTime: 82800, // 11:00 PM
    class: TICKET_CLASS.PREMIUM_ECONOMY,
    price: 3400,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.THURSDAY],
  },
  {
    id: uuidv4(),
    name: "Air India",
    code: "AI 173",
    logo: lufthansaLogo,
    start: "DEL",
    end: "SFO",
    startTime: 39600, // 11:00 AM
    endTime: 79200, // 10:00 PM
    class: TICKET_CLASS.BUSINESS,
    price: 5100,
    currency: "AED",
    stops: [
      {
        code: "SIN",
        landTime: 64800, // 6:00 PM
        takeOffTime: 68400, // 7:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.WEDNESDAY, WEEK_DAYS.FRIDAY],
  },
  {
    id: uuidv4(),
    name: "Cathay Pacific",
    code: "CX 880",
    logo: lufthansaLogo,
    start: "HKG",
    end: "LAX",
    startTime: 32400, // 9:00 AM
    endTime: 68400, // 7:00 PM
    class: TICKET_CLASS.ECONOMY,
    price: 2200,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.TUESDAY, WEEK_DAYS.THURSDAY],
  },
  {
    id: uuidv4(),
    name: "Korean Air",
    code: "KE 17",
    logo: lufthansaLogo,
    start: "ICN",
    end: "JFK",
    startTime: 43200, // 12:00 PM
    endTime: 81000, // 10:30 PM
    class: TICKET_CLASS.FIRST,
    price: 8900,
    currency: "AED",
    stops: [
      {
        code: "LHR",
        landTime: 68400, // 7:00 PM
        takeOffTime: 73800, // 8:30 PM
      },
    ],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.WEDNESDAY],
  },
  {
    id: uuidv4(),
    name: "Air France",
    code: "AF 567",
    logo: lufthansaLogo,
    start: "CDG",
    end: "SYD",
    startTime: 45000, // 12:30 PM
    endTime: 97200, // 3:00 AM (next day)
    class: TICKET_CLASS.PREMIUM_ECONOMY,
    price: 6700,
    currency: "AED",
    stops: [
      {
        code: "DXB",
        landTime: 63000, // 5:30 PM
        takeOffTime: 66600, // 6:30 PM
      },
      {
        code: "SIN",
        landTime: 79200, // 10:00 PM
        takeOffTime: 82800, // 11:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.WEDNESDAY, WEEK_DAYS.FRIDAY],
  },
  {
    id: uuidv4(),
    name: "Air Canada",
    code: "AC 700",
    logo: lufthansaLogo,
    start: "YYZ",
    end: "LHR",
    startTime: 46800, // 1:00 PM
    endTime: 79200, // 10:00 PM
    class: TICKET_CLASS.BUSINESS,
    price: 5700,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.TUESDAY, WEEK_DAYS.THURSDAY],
  },
  {
    id: uuidv4(),
    name: "Alitalia",
    code: "AZ 608",
    logo: lufthansaLogo,
    start: "FCO",
    end: "JFK",
    startTime: 34200, // 9:30 AM
    endTime: 73800, // 8:30 PM
    class: TICKET_CLASS.PREMIUM_ECONOMY,
    price: 3700,
    currency: "AED",
    stops: [
      {
        code: "AMS",
        landTime: 54000, // 3:00 PM
        takeOffTime: 57600, // 4:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.FRIDAY, WEEK_DAYS.SUNDAY],
  },
  {
    id: uuidv4(),
    name: "Malaysia Airlines",
    code: "MH 124",
    logo: lufthansaLogo,
    start: "KUL",
    end: "SYD",
    startTime: 45000, // 12:30 PM
    endTime: 64800, // 6:00 PM
    class: TICKET_CLASS.ECONOMY,
    price: 1900,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.THURSDAY, WEEK_DAYS.SATURDAY],
  },
  {
    id: uuidv4(),
    name: "ANA",
    code: "NH 12",
    logo: lufthansaLogo,
    start: "NRT",
    end: "LAX",
    startTime: 54000, // 3:00 PM
    endTime: 82800, // 11:00 PM
    class: TICKET_CLASS.BUSINESS,
    price: 6100,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.THURSDAY],
  },
  {
    id: uuidv4(),
    name: "Etihad Airways",
    code: "EY 201",
    logo: lufthansaLogo,
    start: "AUH",
    end: "JFK",
    startTime: 39600, // 11:00 AM
    endTime: 93600, // 2:00 AM (next day)
    class: TICKET_CLASS.FIRST,
    price: 8800,
    currency: "AED",
    stops: [
      {
        code: "LHR",
        landTime: 54000, // 3:00 PM
        takeOffTime: 57600, // 4:00 PM
      },
      {
        code: "AMS",
        landTime: 68400, // 7:00 PM
        takeOffTime: 72000, // 8:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.SATURDAY, WEEK_DAYS.TUESDAY],
  },
  {
    id: uuidv4(),
    name: "Emirates",
    code: "EK 501",
    logo: lufthansaLogo,
    start: "DXB",
    end: "BOM",
    startTime: 25200, // 7:00 AM
    endTime: 32400, // 9:00 AM
    class: TICKET_CLASS.ECONOMY,
    price: 1200,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.TUESDAY, WEEK_DAYS.SATURDAY],
  },
  {
    id: uuidv4(),
    name: "Qatar Airways",
    code: "QR 704",
    logo: lufthansaLogo,
    start: "DOH",
    end: "ORD",
    startTime: 39600, // 11:00 AM
    endTime: 79200, // 10:00 PM
    class: TICKET_CLASS.BUSINESS,
    price: 5300,
    currency: "AED",
    stops: [
      {
        code: "LHR",
        landTime: 57600, // 4:00 PM
        takeOffTime: 61200, // 5:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.FRIDAY],
  },
  {
    id: uuidv4(),
    name: "Singapore Airlines",
    code: "SQ 345",
    logo: lufthansaLogo,
    start: "SIN",
    end: "MEL",
    startTime: 36000, // 10:00 AM
    endTime: 57600, // 4:00 PM
    class: TICKET_CLASS.FIRST,
    price: 7500,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.SUNDAY, WEEK_DAYS.WEDNESDAY],
  },
  {
    id: uuidv4(),
    name: "Singapore Airlines",
    code: "SQ 782",
    logo: emiratesLogo,
    start: "SIN",
    end: "SFO",
    startTime: 32400, // 9:00 AM
    endTime: 90000, // 1:00 AM (next day)
    class: TICKET_CLASS.BUSINESS,
    price: 6100,
    currency: "AED",
    stops: [
      {
        code: "NRT",
        landTime: 48600, // 1:30 PM
        takeOffTime: 52200, // 2:30 PM
      },
      {
        code: "ICN",
        landTime: 72000, // 8:00 PM
        takeOffTime: 75600, // 9:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.THURSDAY],
  },
  {
    id: uuidv4(),
    name: "Etihad Airways",
    code: "EY 101",
    logo: emiratesLogo,
    start: "AUH",
    end: "JFK",
    startTime: 54000, // 3:00 PM
    endTime: 82800, // 11:00 PM
    class: TICKET_CLASS.PREMIUM_ECONOMY,
    price: 4500,
    currency: "AED",
    stops: [
      {
        code: "CDG",
        landTime: 68400, // 7:00 PM
        takeOffTime: 72000, // 8:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.TUESDAY, WEEK_DAYS.THURSDAY],
  },
  {
    id: uuidv4(),
    name: "Turkish Airlines",
    code: "TK 202",
    logo: emiratesLogo,
    start: "IST",
    end: "YYZ",
    startTime: 45000, // 12:30 PM
    endTime: 73800, // 8:30 PM
    class: TICKET_CLASS.BUSINESS,
    price: 5200,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.FRIDAY, WEEK_DAYS.SUNDAY],
  },
  {
    id: uuidv4(),
    name: "Cathay Pacific",
    code: "CX 402",
    logo: emiratesLogo,
    start: "HKG",
    end: "LAX",
    startTime: 43200, // 12:00 PM
    endTime: 90000, // 1:00 AM (next day)
    class: TICKET_CLASS.PREMIUM_ECONOMY,
    price: 5200,
    currency: "AED",
    stops: [
      {
        code: "ICN",
        landTime: 54000, // 3:00 PM
        takeOffTime: 57600, // 4:00 PM
      },
      {
        code: "SEA",
        landTime: 75600, // 9:00 PM
        takeOffTime: 79200, // 10:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.TUESDAY, WEEK_DAYS.THURSDAY],
  },
  {
    id: uuidv4(),
    name: "British Airways",
    code: "BA 227",
    logo: emiratesLogo,
    start: "LHR",
    end: "MIA",
    startTime: 46800, // 1:00 PM
    endTime: 75600, // 9:00 PM
    class: TICKET_CLASS.FIRST,
    price: 6800,
    currency: "AED",
    stops: [
      {
        code: "JFK",
        landTime: 64800, // 6:00 PM
        takeOffTime: 68400, // 7:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.WEDNESDAY, WEEK_DAYS.FRIDAY],
  },
  {
    id: uuidv4(),
    name: "American Airlines",
    code: "AA 987",
    logo: emiratesLogo,
    start: "JFK",
    end: "LAX",
    startTime: 54000, // 3:00 PM
    endTime: 68400, // 7:00 PM
    class: TICKET_CLASS.ECONOMY,
    price: 800,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.THURSDAY],
  },
  {
    id: uuidv4(),
    name: "Lufthansa",
    code: "LH 431",
    logo: emiratesLogo,
    start: "FRA",
    end: "ORD",
    startTime: 39600, // 11:00 AM
    endTime: 68400, // 7:00 PM
    class: TICKET_CLASS.BUSINESS,
    price: 5100,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.TUESDAY, WEEK_DAYS.THURSDAY],
  },
  {
    id: uuidv4(),
    name: "Thai Airways",
    code: "TG 102",
    logo: emiratesLogo,
    start: "BKK",
    end: "ORD",
    startTime: 36000, // 10:00 AM
    endTime: 93600, // 2:00 AM (next day)
    class: TICKET_CLASS.BUSINESS,
    price: 6700,
    currency: "AED",
    stops: [
      {
        code: "DEL",
        landTime: 54000, // 3:00 PM
        takeOffTime: 57600, // 4:00 PM
      },
      {
        code: "LHR",
        landTime: 68400, // 7:00 PM
        takeOffTime: 72000, // 8:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.FRIDAY, WEEK_DAYS.SUNDAY],
  },
  {
    id: uuidv4(),
    name: "Air India",
    code: "AI 101",
    logo: emiratesLogo,
    start: "DEL",
    end: "JFK",
    startTime: 28800, // 8:00 AM
    endTime: 75600, // 9:00 PM
    class: TICKET_CLASS.PREMIUM_ECONOMY,
    price: 3900,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.WEDNESDAY, WEEK_DAYS.SUNDAY],
  },
  {
    id: uuidv4(),
    name: "Cathay Pacific",
    code: "CX 890",
    logo: emiratesLogo,
    start: "HKG",
    end: "SFO",
    startTime: 50400, // 2:00 PM
    endTime: 79200, // 10:00 PM
    class: TICKET_CLASS.BUSINESS,
    price: 6200,
    currency: "AED",
    stops: [
      {
        code: "ICN",
        landTime: 64800, // 6:00 PM
        takeOffTime: 68400, // 7:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.SATURDAY],
  },
  {
    id: uuidv4(),
    name: "Malaysia Airlines",
    code: "MH 211",
    logo: emiratesLogo,
    start: "KUL",
    end: "YYZ",
    startTime: 43200, // 12:00 PM
    endTime: 93600, // 2:00 AM (next day)
    class: TICKET_CLASS.FIRST,
    price: 9000,
    currency: "AED",
    stops: [
      {
        code: "HKG",
        landTime: 54000, // 3:00 PM
        takeOffTime: 57600, // 4:00 PM
      },
      {
        code: "ICN",
        landTime: 72000, // 8:00 PM
        takeOffTime: 75600, // 9:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.THURSDAY],
  },
  {
    id: uuidv4(),
    name: "British Airways",
    code: "BA 301",
    logo: emiratesLogo,
    start: "LHR",
    end: "SYD",
    startTime: 45000, // 12:30 PM
    endTime: 97200, // 3:00 AM (next day)
    class: TICKET_CLASS.BUSINESS,
    price: 8100,
    currency: "AED",
    stops: [
      {
        code: "DXB",
        landTime: 57600, // 4:00 PM
        takeOffTime: 61200, // 5:00 PM
      },
      {
        code: "BKK",
        landTime: 75600, // 9:00 PM
        takeOffTime: 79200, // 10:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.TUESDAY, WEEK_DAYS.SATURDAY],
  },
  {
    id: uuidv4(),
    name: "KLM",
    code: "KL 701",
    logo: emiratesLogo,
    start: "AMS",
    end: "ORD",
    startTime: 46800, // 1:00 PM
    endTime: 93600, // 2:00 AM (next day)
    class: TICKET_CLASS.BUSINESS,
    price: 5900,
    currency: "AED",
    stops: [
      {
        code: "CDG",
        landTime: 57600, // 4:00 PM
        takeOffTime: 61200, // 5:00 PM
      },
      {
        code: "LHR",
        landTime: 75600, // 9:00 PM
        takeOffTime: 79200, // 10:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.THURSDAY, WEEK_DAYS.SUNDAY],
  },
  {
    id: uuidv4(),
    name: "Delta Airlines",
    code: "DL 485",
    logo: emiratesLogo,
    start: "ATL",
    end: "DXB",
    startTime: 39600, // 11:00 AM
    endTime: 82800, // 11:00 PM
    class: TICKET_CLASS.ECONOMY,
    price: 4000,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.FRIDAY],
  },
  {
    id: uuidv4(),
    name: "Singapore Airlines",
    code: "SQ 635",
    logo: emiratesLogo,
    start: "SIN",
    end: "LAX",
    startTime: 32400, // 9:00 AM
    endTime: 82800, // 11:00 PM
    class: TICKET_CLASS.FIRST,
    price: 9500,
    currency: "AED",
    stops: [
      {
        code: "NRT",
        landTime: 48600, // 1:30 PM
        takeOffTime: 52200, // 2:30 PM
      },
      {
        code: "SEA",
        landTime: 68400, // 7:00 PM
        takeOffTime: 72000, // 8:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.TUESDAY, WEEK_DAYS.THURSDAY],
  },
  {
    id: uuidv4(),
    name: "Etihad Airways",
    code: "EY 150",
    logo: emiratesLogo,
    start: "AUH",
    end: "YYZ",
    startTime: 43200, // 12:00 PM
    endTime: 90000, // 1:00 AM (next day)
    class: TICKET_CLASS.PREMIUM_ECONOMY,
    price: 7200,
    currency: "AED",
    stops: [
      {
        code: "LHR",
        landTime: 54000, // 3:00 PM
        takeOffTime: 57600, // 4:00 PM
      },
      {
        code: "ORD",
        landTime: 79200, // 10:00 PM
        takeOffTime: 82800, // 11:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.FRIDAY, WEEK_DAYS.SUNDAY],
  },
  {
    id: uuidv4(),
    name: "British Airways",
    code: "BA 101",
    logo: emiratesLogo,
    start: "LHR",
    end: "SYD",
    startTime: 45000, // 12:30 PM
    endTime: 97200, // 3:00 AM (next day)
    class: TICKET_CLASS.BUSINESS,
    price: 8100,
    currency: "AED",
    stops: [
      {
        code: "DXB",
        landTime: 57600, // 4:00 PM
        takeOffTime: 61200, // 5:00 PM
      },
      {
        code: "BKK",
        landTime: 75600, // 9:00 PM
        takeOffTime: 79200, // 10:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.TUESDAY, WEEK_DAYS.SATURDAY],
  },
  {
    id: uuidv4(),
    name: "Qantas",
    code: "QF 987",
    logo: emiratesLogo,
    start: "SYD",
    end: "JFK",
    startTime: 32400, // 9:00 AM
    endTime: 93600, // 2:00 AM (next day)
    class: TICKET_CLASS.FIRST,
    price: 8900,
    currency: "AED",
    stops: [
      {
        code: "SIN",
        landTime: 48600, // 1:30 PM
        takeOffTime: 52200, // 2:30 PM
      },
      {
        code: "LAX",
        landTime: 68400, // 7:00 PM
        takeOffTime: 72000, // 8:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.MONDAY, WEEK_DAYS.THURSDAY],
  },
  {
    id: uuidv4(),
    name: "Air Canada",
    code: "AC 123",
    logo: emiratesLogo,
    start: "YYZ",
    end: "HKG",
    startTime: 54000, // 3:00 PM
    endTime: 97200, // 3:00 AM (next day)
    class: TICKET_CLASS.PREMIUM_ECONOMY,
    price: 7300,
    currency: "AED",
    stops: [
      {
        code: "ORD",
        landTime: 64800, // 6:00 PM
        takeOffTime: 68400, // 7:00 PM
      },
      {
        code: "ICN",
        landTime: 79200, // 10:00 PM
        takeOffTime: 82800, // 11:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.FRIDAY, WEEK_DAYS.SUNDAY],
  },
  {
    id: uuidv4(),
    name: "Malaysia Airlines",
    code: "MH 567",
    logo: emiratesLogo,
    start: "KUL",
    end: "JFK",
    startTime: 43200, // 12:00 PM
    endTime: 93600, // 2:00 AM (next day)
    class: TICKET_CLASS.BUSINESS,
    price: 7600,
    currency: "AED",
    stops: [
      {
        code: "NRT",
        landTime: 54000, // 3:00 PM
        takeOffTime: 57600, // 4:00 PM
      },
      {
        code: "SFO",
        landTime: 79200, // 10:00 PM
        takeOffTime: 82800, // 11:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.WEDNESDAY, WEEK_DAYS.SATURDAY],
  },
  {
    id: uuidv4(),
    name: "Cathay Pacific",
    code: "CX 402",
    logo: emiratesLogo,
    start: "HKG",
    end: "SEA",
    startTime: 46800, // 1:00 PM
    endTime: 79200, // 10:00 PM
    class: TICKET_CLASS.ECONOMY,
    price: 5000,
    currency: "AED",
    stops: [],
    availableDays: [WEEK_DAYS.TUESDAY, WEEK_DAYS.THURSDAY],
  },
  {
    id: uuidv4(),
    name: "Turkish Airlines",
    code: "TK 812",
    logo: emiratesLogo,
    start: "IST",
    end: "ORD",
    startTime: 54000, // 3:00 PM
    endTime: 90000, // 1:00 AM (next day)
    class: TICKET_CLASS.BUSINESS,
    price: 6200,
    currency: "AED",
    stops: [
      {
        code: "CDG",
        landTime: 61200, // 5:00 PM
        takeOffTime: 64800, // 6:00 PM
      },
      {
        code: "JFK",
        landTime: 75600, // 9:00 PM
        takeOffTime: 79200, // 10:00 PM
      },
    ],
    availableDays: [WEEK_DAYS.WEDNESDAY, WEEK_DAYS.SATURDAY],
  },
];
