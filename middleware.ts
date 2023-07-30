import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  if (
    !request.cookies.has("token") &&
    url.includes("api") &&
    !url.includes("auth")
  ) {
    return NextResponse.json(
      { message: "Timed out.", type: "ERROR" },
      { status: 401 }
    );
  }
}
