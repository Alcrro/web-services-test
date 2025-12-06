"use client";
import {
  IServiceOrderTable,
  serviceNameHeaderColumnMapper,
} from "@/modules/services/domain/types/service.types";
import { useFilterableColumn } from "@/shared/utils/handleFilter";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Column } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import HeaderColumnListItem from "@/components/atoms/HeaderColumnListItem";
import TableHeaderNotification from "@/components/atoms/notifications/TableHeaderNotification";

interface ServiceNameProps<T> {
  column: Column<T>;
}
type ColumnMetaWithData<T> = {
  data?: T[];
};
const ServiceNameOrderTable = <T,>({ column }: ServiceNameProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const data = (column.columnDef.meta as ColumnMetaWithData<IServiceOrderTable>)
    ?.data;

  const statusCounts = useMemo(() => {
    if (!data) return {} as Record<string, number>;
    return data.reduce((acc, curr) => {
      if (!curr.uniqueServiceId) return {};

      acc[curr.uniqueServiceId] = (acc[curr.uniqueServiceId] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [data]);
  const { currentFilter, currentValue, setFilter } = useFilterableColumn();

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-1 mx-auto cursor-pointer relative">
          {currentFilter === "serviceName" && <TableHeaderNotification />}
          Service {!isOpen ? <FaCaretDown /> : <FaCaretUp />}
        </button>
      </PopoverTrigger>

      <PopoverContent>
        <ul className="flex flex-col gap-2 bg-(--color-bg) p-2 rounded-2xl">
          {Object.entries(serviceNameHeaderColumnMapper).map(([k, v]) => {
            return (
              <HeaderColumnListItem
                value={v}
                checkIfIsSelected={currentValue === k}
                filteredHandle={() => setFilter("serviceName", k)}
                statusCounts={statusCounts[k]}
                key={k}
              />
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default ServiceNameOrderTable;
