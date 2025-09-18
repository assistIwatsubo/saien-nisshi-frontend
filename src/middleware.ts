// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  if (!token) return NextResponse.redirect(new URL("/", req.url));

  try {
    const res = await fetch("http://localhost:8080/api/me", {
      headers: { Authorization: `Bearer ${token.accessToken}` },
    });
    if (!res.ok) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } catch {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/terrace", "/terrace/:path*", "/user", "/user/:path*"],
};
