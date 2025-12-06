import { IMetaPagination } from "@/modules/globals/types/types";
import { ClientRepository } from "../../domain/client.repository.interface";
import { IClient, ICLientFIlters } from "../../domain/types/client.types";

export class FindAllUseCase {
  constructor(private readonly clientRepo: ClientRepository) {}

  async execute(
    options: ICLientFIlters
  ): Promise<{ data: IClient[]; meta: IMetaPagination }> {
    const page = options.page ?? 1;
    const limit = options.limit ?? 10;
    const { data, total } = await this.clientRepo.getAll(options);

    return {
      data: data,
      meta: {
        total,
        limit,
        page,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
