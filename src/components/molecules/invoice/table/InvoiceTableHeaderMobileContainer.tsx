import InvoiceTableCell from "@/components/atoms/invoice/InvoiceTableCell";
import { IServiceOrder } from "@/modules/orders/domain/types/order.types";
import { formatPriceValue } from "@/shared/utils/formatServicesPrice";
import React from "react";

const InvoiceTableHeaderMobileContainer = ({
  order,
}: {
  order: IServiceOrder;
}) => {
  return (
    <tr>
      <InvoiceTableCell data-label={"Service"}>
        {order.service?.name}
      </InvoiceTableCell>
      <InvoiceTableCell data-label={"Description"}>
        {order.requirements || order.service?.description || "N/A"}
      </InvoiceTableCell>
      <InvoiceTableCell data-label={"Quantity"}>x1</InvoiceTableCell>
      <InvoiceTableCell data-label={"SubTotal"}>
        {formatPriceValue(Number(order.initialPrice).toFixed(2))}
      </InvoiceTableCell>
    </tr>
  );
};

export default InvoiceTableHeaderMobileContainer;
