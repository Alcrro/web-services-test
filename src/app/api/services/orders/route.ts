import { ClientRepositoryImpl } from "@/modules/clients/infrastructure/client.repository";
import { CreateOrder } from "@/modules/orders/application/use-cases/createOrder.usecase";
import { FindAllOrder } from "@/modules/orders/application/use-cases/findAllOrder.usecase";
import { OrderRepositoryImplementation } from "@/modules/orders/infrastructure/order.repository";
import { AppError } from "@/shared/utils/AppError";
import { prisma } from "@/lib/prisma";
import { clientMapPrismaError } from "@/shared/utils/mappingErrors/clientMapPrismaError";
import { NextRequest, NextResponse } from "next/server";
import { ServiceOrderItemImpl } from "@/modules/orders/infrastructure/ServiceOrderItem.repository";
import { IServiceOrder } from "@/modules/orders/domain/types/order.types";
import { TaskRepositoryImpl } from "@/modules/tasks/infrastructure/task.repository";
import { GithubServices } from "@/modules/features/github/usecase/GithubServices";

export async function GET(request: NextRequest) {
  try {
    const query = request.nextUrl.searchParams;

    const page = Number(query.get("page") || 1);
    const limit = Number(query.get("limit") || 10);
    const field = query.get("field") as keyof IServiceOrder;
    const direction = query.get("direction") as "asc" | "desc";
    const filter = query.get("filter") as keyof IServiceOrder;
    const value = query.get("value") as string | number | boolean;

    const orderRepositoryImpl = new OrderRepositoryImplementation(prisma);
    const order = new FindAllOrder(orderRepositoryImpl);

    const result = await order.execute({
      limit,
      page,
      orderBy: { field, direction },
      filters: {
        filter,
        value,
      },
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);

    if (error instanceof Error) {
      const appError =
        error instanceof AppError ? error : clientMapPrismaError(error);

      return NextResponse.json(
        { ok: false, message: appError.userMessage },
        { status: appError.status }
      );
    }

    return NextResponse.json("internal error");
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // const db = new PrismaClient();
    const { client } = body;

    console.log({ client });

    if (!client?.name || client.name === "" || !client?.email) {
      return NextResponse.json(
        { ok: false, message: "Client name and email are required" },
        { status: 400 }
      );
    }
    const TOKEN = process.env.GITHUB_TOKEN as string;
    const OWNER = process.env.GITHUB_OWNER as string;
    const REPO = process.env.GITHUB_REPO as string;
    const orderRepositoryImpl = new OrderRepositoryImplementation(prisma);
    const clientRepositoryImpl = new ClientRepositoryImpl(prisma);
    const serviceOrderItemImpl = new ServiceOrderItemImpl(prisma);
    const taskOrderItemImpl = new TaskRepositoryImpl(prisma);
    const githubServices = new GithubServices(TOKEN, OWNER, REPO);

    const createOrder = new CreateOrder(
      orderRepositoryImpl,
      clientRepositoryImpl,
      serviceOrderItemImpl,
      githubServices,
      taskOrderItemImpl
    );

    const newOrder = await createOrder.execute(body);

    return NextResponse.json({ ok: true, newOrder }, { status: 201 });
  } catch (error: unknown) {
    console.log(error);

    if (error instanceof Error) {
      const appError =
        error instanceof AppError ? error : clientMapPrismaError(error);

      return NextResponse.json(
        { ok: false, message: appError.userMessage },
        { status: appError.status }
      );
    }

    return NextResponse.json("internal error");
  }
}
