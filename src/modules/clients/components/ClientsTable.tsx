import { getClientsAPI } from "@/services/api/client/clientApi";
import { getDataCachedFromDB } from "@/shared/utils/getDataCached";
import React from "react";
import ClientsTableClient from "../../../components/organisms/client/ClientsTableClient";
import { mapSearchParamsOptions } from "@/modules/orders/infrastructure/searchParamsToFilter";
import {
  IClient,
  ICLientFIlters,
} from "@/modules/clients/domain/types/client.types";
import { IFilters } from "@/modules/globals/types/types";

export type IClientTable = {
  data: IClient[];
  meta: IFilters<IClient>;
};
const ClientsTable = async ({
  searchParams,
}: {
  searchParams?: Record<string, string | string[]>;
}) => {
  const params = searchParams || {};
  const options = mapSearchParamsOptions<IClient>(params);
  const clients = await getDataCachedFromDB<IClientTable, ICLientFIlters>(
    getClientsAPI,
    "clients",
    60,
    options
  );

  const { data, meta } = clients;

  return (
    // <div className="border rounded-2xl p-1 border-gray-200 dark:border-gray-700">
    <ClientsTableClient data={data} meta={meta} />
    // </div>
  );
};

export default ClientsTable;
