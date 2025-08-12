import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (url.pathname === "/google-popup/") {
    const response = NextResponse.next();
    response.headers.set("Cross-Origin-Opener-Policy", "unsafe-none");
    response.headers.set("Cross-Origin-Embedder-Policy", "unsafe-none");
    return response;
  }

  return NextResponse.next();
}
