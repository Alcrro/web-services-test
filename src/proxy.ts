import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./shared/utils/getSession";
import { generateCSP } from "./shared/utils/middlewares/csp/generateCSP";
import { applyCSP } from "./shared/utils/middlewares/csp/applyCSP";

export async function proxy(req: NextRequest) {
  try {
    const token = await getSession();
    const isAuthArray = ["administrator", "client", "invoices"];
    const { pathname } = req.nextUrl;

    const isFirstPathname = isAuthArray.includes(
      pathname.slice(1, pathname.indexOf("/", 1))
    );

    if (isFirstPathname) {
      if (!token) {
        const url = req.nextUrl.clone();
        url.pathname = "/"; // redirect către homepage
        return NextResponse.redirect(url);
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    }
    return NextResponse.json({ error: "something wrong!" });
  }
  const response = NextResponse.next();

  // generează CSP + nonce
  const { nonce, cspHeader } = generateCSP();

  // poți păstra nonce în header dacă vrei să-l folosești în front-end
  response.headers.set(
    "Content-Security-Policy",
    `script-src 'self' 'nonce-${nonce}'`
  );
  response.headers.set("x-nonce", nonce);
  return applyCSP(response, cspHeader);
}
export const config = {
  matcher: [
    "/administrator/:path*",
    "/invoices/:path*",
    "/client/:path*",
    "/services/:path*",
  ],
};
