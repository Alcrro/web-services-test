"use client";
import DefaultTable from "@/components/ui/defaultTable/DefaultTable";
import LoadingOrderTableColumnClient from "./LoadingOrderTableColumnClient";
import { getOrderColumns } from "@/modules/orders/components/OrderTableColumn";
import { useModalStore } from "@/context/modalStore";
import { IMetaPagination } from "@/modules/globals/types/types";
import { useOrders } from "@/shared/hooks/useOrders";
import { IServiceOrderTable } from "@/modules/services/domain/types/service.types";

interface Props {
  initialData: IServiceOrderTable[]; // date SSR pentru prima pagină
  meta: IMetaPagination; // meta SSR
  params: Record<string, string | string[]>; // { page, limit, ... }
}

const DefaultTableClient = ({ initialData, meta, params }: Props) => {
  const modals = useModalStore((store) => store.modals);
  const isOpen = !!modals["table"];

  const { data, isLoading, isFetching, isPlaceholderData } = useOrders(
    params,
    meta.page === 1 ? { data: initialData, meta } : undefined
  );

  const tableData = data?.data ?? initialData;
  const tableMeta = data?.meta ?? meta;

  // const orders = tableData.map(ordersTableMapper);
  const columns = getOrderColumns(
    tableData as unknown as IServiceOrderTable[],
    isOpen
  );

  const showSkeleton = isLoading || isFetching || isPlaceholderData;
  // Skeleton vizibil în timp ce datele noi se încarcă
  if (showSkeleton) {
    return (
      <LoadingOrderTableColumnClient
        initialData={initialData}
        meta={tableMeta.totalPages ?? 1}
        params={params}
      />
    );
  }

  return (
    <DefaultTable<IServiceOrderTable>
      data={tableData}
      columns={columns}
      meta={tableMeta}
    />
  );
};

export default DefaultTableClient;
