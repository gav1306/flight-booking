import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const from = nextUrl.searchParams.get("from");
  const to = nextUrl.searchParams.get("to");
  const departureDate = nextUrl.searchParams.get("departureDate");
  const returnDate = nextUrl.searchParams.get("returnDate");
  if (
    !from ||
    !to ||
    !departureDate ||
    !returnDate ||
    (departureDate && isNaN(+departureDate)) ||
    (returnDate && isNaN(+returnDate))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/transport",
};
