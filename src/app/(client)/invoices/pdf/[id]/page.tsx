import Invoice from "@/components/organisms/invoice/Invoice";
import { IServiceOrder } from "@/modules/orders/domain/types/order.types";
import { getServiceOrderById } from "@/services/api/services/servicesApi";
import { getDataCachedFromDB } from "@/shared/utils/getDataCached";

export interface IOrderInvoice {
  order: IServiceOrder & { extraFeaturesTotal: number };
}

export default async function InvoicePDFPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const order = await getDataCachedFromDB(
    getServiceOrderById<IServiceOrder & { extraFeaturesTotal: number }>,
    "orderInvoice",
    60,
    id
  );
  if (!order) return <div>Order not found</div>;

  return <Invoice order={order} />;
}
