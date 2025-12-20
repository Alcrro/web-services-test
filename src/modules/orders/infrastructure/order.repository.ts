import { Prisma, PrismaClient } from "@prisma/client";
import { OrderRepository } from "../domain/order.repository.interface";
import {
  IFiltersServiceOrders,
  IServiceOrder,
} from "../domain/types/order.types";
import {
  serviceOrderMapperDocToDom,
  serviceOrderMapperDomainToDoc,
} from "./serviceOrderMapper";
import { IFilterOption, IOrderBy } from "@/modules/globals/types/types";
import { buildPrismaFilters } from "@/shared/utils/filters/buildPrismaFilters";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";

export class OrderRepositoryImplementation implements OrderRepository {
  constructor(private readonly db: PrismaClient) {}

  async create(order: IServiceOrder): Promise<IServiceOrder> {
    try {
      const dataMapped = serviceOrderMapperDomainToDoc(order);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id: _id, ...dataWithoutId } = dataMapped;
      const result = await this.db.serviceOrder.create({ data: dataWithoutId });

      return serviceOrderMapperDocToDom(result);
    } catch (error) {
      if (error instanceof PrismaClientValidationError) {
        console.error("Prisma validation error: ", error.message);
        throw new Error("Invalid data for ServiceOrderItem. Check your fields");
      }
      if (error instanceof PrismaClientKnownRequestError) {
        console.error("Prisma known request error:", error.code, error.message);
        throw new Error("Database request failed. Contact support.");
      }

      console.error("Unknown error:", error);
      throw new Error(
        "Something went wrong while creating the ServiceOrderItem."
      );
    }
  }

  async getAll(
    options?: IFiltersServiceOrders
  ): Promise<{ data: IServiceOrder[]; total: number }> {
    try {
      const {
        filters = {} as IFilterOption<IServiceOrder>,
        page,
        limit = 10,
        orderBy = {} as IOrderBy<IServiceOrder>,
      } = options || {};

      const skip = (page! - 1) * limit;
      // Suppose orderByPrisma is dynamically built
      let orderByPrisma: Prisma.ServiceOrderByWithAggregationInput | undefined =
        undefined;

      if (orderBy?.field) {
        orderByPrisma = {
          [orderBy.field]: orderBy.direction || "asc",
        };
      }

      const filtersPrisma = buildPrismaFilters<IServiceOrder>(
        filters,
        "serviceOrder"
      );
      console.log({ filtersPrisma });

      console.time("prismaQuery");
      const [data, total] = await Promise.all([
        this.db.serviceOrder.findMany({
          where: filtersPrisma,
          skip,
          ...(limit && limit > 0 ? { take: limit } : {}),
          ...(orderByPrisma ? { orderBy: orderByPrisma } : {}),
          include: {
            client: true,
            service: true,
            items: true,
            tasks: true,
          },
        }),
        this.db.serviceOrder.count({ where: filtersPrisma }),
      ]);
      console.timeEnd("prismaQuery");
      const result = data.map(serviceOrderMapperDocToDom);
      return { data: result, total };
    } catch (error) {
      throw error instanceof Error ? error : new Error("Internal db error");
    }
  }
  async findById(orderId: string): Promise<IServiceOrder> {
    try {
      const result = await this.db.serviceOrder.findUnique({
        where: { id: orderId },
        include: {
          client: true,
          service: true,
          items: true,
          tasks: true,
        },
      });
      if (!result) throw new Error("order isn't in db");

      // console.log({ result });

      return serviceOrderMapperDocToDom(result);
    } catch (error) {
      throw error instanceof Error ? error : new Error("Internal db error");
    }
  }
}
