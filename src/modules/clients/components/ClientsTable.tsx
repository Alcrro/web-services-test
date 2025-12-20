import ClientsTableClient from "../../../components/organisms/client/ClientsTableClient";
import { IClient } from "@/modules/clients/domain/types/client.types";
import { IFilters } from "@/modules/globals/types/types";
import { ClientService } from "../application/services/clients.service";

export type IClientTable = {
  data: IClient[];
  meta: IFilters<IClient>;
};
const ClientsTable = async ({
  searchParams = {},
}: {
  searchParams?: Record<string, string | string[]>;
}) => {
  const clientsAction = new ClientService();
  const clients = await clientsAction.getAllClients(searchParams);

  const { data, meta } = clients;

  return (
    // <div className="border rounded-2xl p-1 border-gray-200 dark:border-gray-700">
    <ClientsTableClient data={data} meta={meta} />
    // </div>
  );
};

export default ClientsTable;
