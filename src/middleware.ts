import { auth } from "./auth";

export default auth((req) => {
  console.log("middleware started");
  if (!req.auth && req.nextUrl.pathname !== "/") {
    const newUrl = new URL("/", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/terrace", "/terrace/:path*", "/user", "/user/:path*"],
};
