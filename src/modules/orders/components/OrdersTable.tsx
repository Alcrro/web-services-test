import { getServiceOrder } from "@/services/api/services/servicesApi";
import { FC } from "react";
import DefaultTableClient from "../../../components/organisms/OrdersTableClient";
import { ordersTableMapper } from "@/modules/orders/infrastructure/serviceOrderMapper";
import {
  IFiltersServiceOrders,
  IServiceOrder,
} from "@/modules/orders/domain/types/order.types";
import { getDataCachedFromDB } from "@/shared/utils/getDataCached";
import { IFilters } from "@/modules/globals/types/types";
import { mapSearchParamsOptions } from "@/modules/orders/infrastructure/searchParamsToFilter";

export type IServiceOrderTableProps = {
  data: (IServiceOrder & {
    extraFeaturesTotalPrice: number;
  })[];
  meta: IFilters<IServiceOrder>;
};

interface PageProps {
  searchParams?: Record<string, string | string[]>;
}
const OrdersTable: FC<PageProps> = async ({ searchParams = {} }) => {
  const options: IFiltersServiceOrders =
    mapSearchParamsOptions<IServiceOrder>(searchParams);

  const orders = await getDataCachedFromDB<
    IServiceOrderTableProps,
    IFiltersServiceOrders
  >(getServiceOrder, "orders", 60, options);

  const { data, meta } = orders;

  const tableOrders = data.map(ordersTableMapper);

  // await new Promise((res) => setTimeout(res, 3000));

  return (
    <DefaultTableClient
      initialData={tableOrders}
      meta={meta}
      params={searchParams}
    />
  );
};

export default OrdersTable;
