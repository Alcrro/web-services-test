import { mapSearchParamsOptions } from "@/modules/orders/infrastructure/searchParamsToFilter";
import { getDataCachedFromDB } from "@/shared/utils/getDataCached";
import { IServiceOrderTableProps } from "../../orders/components/OrdersTable";
import { IFiltersServiceOrders } from "@/modules/orders/domain/types/order.types";
import { getServiceOrder } from "@/services/api/services/servicesApi";
import { ordersTableMapper } from "@/modules/orders/infrastructure/serviceOrderMapper";
import LoadingOrderTableColumnClient from "../../../components/organisms/LoadingOrderTableColumnClient";

const LoadingOrderTable = async ({
  searchParams,
}: {
  searchParams?: Record<string, string | string[]>;
}) => {
  const params = searchParams || {};

  const options: IFiltersServiceOrders = mapSearchParamsOptions(params);

  // console.log(options);

  const orders = await getDataCachedFromDB<
    IServiceOrderTableProps,
    IFiltersServiceOrders
  >(getServiceOrder, "orders", 60, options);

  const { data, meta } = orders;

  const totalPages = Math.max(1, meta?.totalPages ?? 1);
  const tableOrders = data.map(ordersTableMapper);

  return (
    <LoadingOrderTableColumnClient
      initialData={tableOrders}
      meta={totalPages}
      params={params}
    />
  );
};

export default LoadingOrderTable;
