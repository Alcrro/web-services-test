import { mapSearchParamsOptions } from "@/modules/orders/infrastructure/searchParamsToFilter";
import { IFiltersServiceOrders } from "@/modules/orders/domain/types/order.types";
import LoadingOrderTableColumnClient from "../../../components/organisms/LoadingOrderTableColumnClient";
import { OrdersAction } from "@/modules/orders/application/orders.action";

const LoadingOrderTable = async ({
  searchParams,
}: {
  searchParams?: Record<string, string | string[]>;
}) => {
  const params = searchParams || {};

  const options: IFiltersServiceOrders = mapSearchParamsOptions(params);

  // console.log(options);
  const ordersAction = new OrdersAction();

  const orders = await ordersAction.getAllTableOrders(options);

  const { data, meta } = orders;

  const totalPages = Math.max(1, meta?.totalPages ?? 1);

  return (
    <LoadingOrderTableColumnClient
      initialData={data}
      meta={totalPages}
      params={params}
    />
  );
};

export default LoadingOrderTable;
