import LoadingOrderTable from "@/modules/clients/components/LoadingOrderTable";
import OrderTablePage from "./OrderTable";
import { Suspense } from "react";

const OrderTableWithSuspense = ({
  searchParams,
}: {
  searchParams?: Record<string, string | string[]>;
}) => {
  return (
    <Suspense fallback={<LoadingOrderTable searchParams={searchParams} />}>
      <OrderTablePage searchParams={searchParams} />
    </Suspense>
  );
};

export default OrderTableWithSuspense;
