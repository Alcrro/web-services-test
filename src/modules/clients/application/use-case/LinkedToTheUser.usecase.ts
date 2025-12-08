import { AuthRepository } from "@/modules/auth/domain/auth.repository.interface";
import { ClientRepository } from "../../domain/client.repository.interface";

export class ClientLinkingToTheUser {
  constructor(
    private readonly authRepo: AuthRepository,
    private readonly clientRepo: ClientRepository
  ) {}

  async execute(userId: string, value: "yes" | "later") {
    if (value === "later") return;
    const user = await this.authRepo.getOne(userId);
    if (!user) throw new Error("user not found");
    const client = await this.ensureClientMatch(user.email);
    if (client && value === "yes") {
      await this.authRepo.update(userId, { clientId: client.id });
    }
  }

  async ensureClientMatch(email: string) {
    const client = await this.clientRepo.findByEmail(email);

    return client;
  }
}
