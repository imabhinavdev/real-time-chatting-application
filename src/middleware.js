import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;
  if (path === "/") {
    const cook = request.cookies.get("token");
    if (cook) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  if (path === "/login") {
    const cook = request.cookies.get("token");
    if (cook) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login"],
};
