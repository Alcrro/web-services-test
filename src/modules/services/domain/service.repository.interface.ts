import { IFilterServices, IService } from "./types/service.types";

export interface ServiceRepository {
  create(service: IService): Promise<IService>;
  findById(serviceId: string): Promise<IService | null>;
  findAll(options?: IFilterServices): Promise<IService[]>;
  update(serviceId: string, data: Partial<IService>): Promise<IService>;
  delete(serviceId: string): Promise<void>;
}
