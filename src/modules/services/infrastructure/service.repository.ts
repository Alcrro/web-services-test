import { Prisma, PrismaClient } from "@prisma/client";
import { ServiceRepository } from "../domain/service.repository.interface";
import {
  serviceMapperDocToDom,
  serviceMapperDomToDoc,
  servicePartialMapperDoc,
} from "./serviceMapper";
import { IFilterServices, IService } from "../domain/types/service.types";
import { AppError } from "@/shared/utils/AppError";
import { buildPrismaFilters } from "@/shared/utils/filters/buildPrismaFilters";
import { IFilterOption, IOrderBy } from "@/modules/globals/types/types";

export class ServiceRepositImpl implements ServiceRepository {
  constructor(private readonly db: PrismaClient) {}

  async create(service: IService): Promise<IService> {
    const serviceMapper = serviceMapperDomToDoc(service);
    try {
      const result = await this.db.service.create({
        data: serviceMapper,
        include: {
          serviceFeatures: {
            include: {
              feature: true,
            },
          },
        },
      });

      return serviceMapperDocToDom(result);
    } catch (error) {
      console.log(error);
      if (error instanceof AppError) {
        throw new AppError(error.message, "", error.status);
      }

      throw new Error("internal error");
    }
  }
  async findById(serviceId: string): Promise<IService | null> {
    try {
      const result = await this.db.service.findUnique({
        where: { uniqueId: serviceId },
        include: { serviceFeatures: { include: { feature: true } } },
      });

      if (!result) return null;

      return serviceMapperDocToDom(result);
    } catch (error) {
      console.log(error);
      if (error instanceof AppError) {
        throw new AppError(error.message, "", error.status);
      }
      throw new Error("internal error");
    }
  }
  async findAll(options?: IFilterServices): Promise<IService[]> {
    try {
      const {
        filters = {} as IFilterOption<IService>,
        limit = 15,
        skip = 0,
        orderBy = {} as IOrderBy<IService>,
      } = options || {};

      let orderByPrisma: Prisma.ServiceOrderByWithAggregationInput | undefined =
        undefined;

      if (orderBy?.field) {
        orderByPrisma = {
          [orderBy.field]: orderBy.direction || "asc",
        };
      }
      const filtersPrisma = buildPrismaFilters<IService>(filters, "services");

      const result = await this.db.service.findMany({
        where: filtersPrisma,
        ...(limit && limit > 0 ? { take: limit } : {}),
        skip,
        ...(orderByPrisma ? { orderBy: orderByPrisma } : {}),
        include: {
          serviceFeatures: {
            include: {
              feature: true,
            },
          },
        },
      });

      return result.map(serviceMapperDocToDom);
    } catch (error) {
      console.log(error);

      throw new Error("Internal db error");
    }
  }
  async update(
    serviceId: string,
    serviceData: Partial<IService>
  ): Promise<IService> {
    try {
      const data = servicePartialMapperDoc(serviceData);
      const result = await this.db.service.update({
        where: { id: Number(serviceId) },
        data: data,
        include: {
          serviceFeatures: {
            include: { feature: true },
          },
        },
      });

      return serviceMapperDocToDom(result);
    } catch (error) {
      console.log(error);
      if (error instanceof AppError) {
        throw new AppError(error.message, "", error.status);
      }
      throw new Error("internal error");
    }
  }
  async delete(serviceId: string): Promise<void> {
    try {
      await this.db.service.delete({
        where: { id: Number(serviceId) },
      });
    } catch (error) {
      console.log(error);
      if (error instanceof AppError) {
        throw new AppError(error.message, "", error.status);
      }
      throw new Error("internal error");
    }
  }
}
