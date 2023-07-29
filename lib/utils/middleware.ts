import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  if (!request.cookies.has("token")) {
    if (url.includes("api") && !url.includes("auth")) {
      return NextResponse.json(
        { message: "Session is timed out", type: "ERROR" },
        { status: 401 }
      );
    }
  }
  return NextResponse.next();
}
