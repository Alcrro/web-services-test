import { getDataCachedFromDB } from "@/shared/utils/getDataCached";
import { IServiceOrderTableProps } from "../../modules/orders/components/OrdersTable";
import { IFiltersServiceOrders } from "@/modules/orders/domain/types/order.types";
import { getServiceOrder } from "@/services/api/services/servicesApi";
import { ordersTableMapper } from "@/modules/orders/infrastructure/serviceOrderMapper";
import { serviceNameHeaderColumnMapper } from "@/modules/services/domain/types/service.types";
import ServiceOrderStatisticsInteractive from "./ServiceOrderStatisticsInteractive";
import Title from "@/shared/ui/Title";

const ServiceOrderStatistics = async () => {
  const ordersData = await getDataCachedFromDB<
    IServiceOrderTableProps,
    IFiltersServiceOrders
  >(getServiceOrder, "ordersSummary", 60, { limit: 0 });

  const { data } = ordersData;

  const orders = data.map(ordersTableMapper);

  const serviceCountsArray = Object.entries(serviceNameHeaderColumnMapper).map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, v]) => {
      const count = orders.filter(
        (o) =>
          o.uniqueServiceId &&
          serviceNameHeaderColumnMapper[
            o.uniqueServiceId as keyof typeof serviceNameHeaderColumnMapper
          ] === v
      ).length;

      return { name: v, value: count };
    }
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <Title as="h1" className="text-4xl font-semibold py-6">
        Statistics
      </Title>
      <ServiceOrderStatisticsInteractive
        pieData={serviceCountsArray}
        orders={orders}
      />
    </div>
  );
};

export default ServiceOrderStatistics;
