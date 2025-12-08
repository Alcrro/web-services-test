import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./shared/utils/getSession";

export async function proxy(req: NextRequest) {
  try {
    const token = await getSession();

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/"; // redirect către homepage
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    }
    return NextResponse.json({ error: "something wrong!" });
  }
}
export const config = {
  matcher: ["/administrator/:path*", "/client/:path*"],
};
