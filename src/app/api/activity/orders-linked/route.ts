import { AuthRepositoryImpl } from "@/modules/auth/infrastructure/auth.repository";
import { ClientLinkingToTheUser } from "@/modules/clients/application/use-case/LinkedToTheUser.usecase";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ClientRepositoryImpl } from "@/modules/clients/infrastructure/client.repository";
import { JWTTokenServices } from "@/services/token/JWTToken";
import { getSession } from "@/shared/utils/getSession";

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();

    const { value } = body;

    const cookieToken = await getSession();
    let token;
    token = cookieToken;
    const authHeader = req.headers.get("authorization");
    if (!token) {
      token = authHeader?.replace("Bearer ", "");
    }

    if (!token)
      return NextResponse.json({ error: "No token" }, { status: 401 });

    const authRepoImpl = new AuthRepositoryImpl(prisma);
    const clientRepoImpl = new ClientRepositoryImpl(prisma);
    const jwtTokenService = new JWTTokenServices();
    const { userId } = jwtTokenService.decodeToken(token);
    const linkUserWithClient = new ClientLinkingToTheUser(
      authRepoImpl,
      clientRepoImpl
    );

    const mere = await linkUserWithClient.execute(userId, value);

    return NextResponse.json(mere);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message);
    }
    return NextResponse.json("internal error");
  }
}
