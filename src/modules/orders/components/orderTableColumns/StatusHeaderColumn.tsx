"use client";
import Button from "@/shared/ui/Button";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { useMemo, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import {
  IServiceOrder,
  statusOrderByMapperFrontToURL,
} from "../../domain/types/order.types";
import { Column } from "@tanstack/react-table";
import TableHeaderNotification from "@/components/atoms/notifications/TableHeaderNotification";
import { useFilterableColumn } from "@/shared/utils/handleFilter";
import HeaderColumnListItem from "@/components/atoms/HeaderColumnListItem";

interface IStatusHeaderProps<T> {
  column: Column<T, unknown>;
  data?: T[];
}

type ColumnMetaWithData<T> = {
  data?: T[];
};
const StatusHeaderColumn = <T,>({ column }: IStatusHeaderProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const data = (column.columnDef.meta as ColumnMetaWithData<IServiceOrder>)
    ?.data;

  const statusCounts = useMemo(() => {
    if (!data) return {} as Record<string, number>;
    return data.reduce((acc, row) => {
      acc[row.status] = (acc[row.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [data]);

  const { currentFilter, currentValue, setFilter } = useFilterableColumn();
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button className="">
          <div className="relative flex gap-1 mx-auto justify-center items-center">
            {currentFilter === "status" && <TableHeaderNotification />}
            Status {!isOpen ? <FaCaretDown /> : <FaCaretUp />}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-1 items-center justify-center">
        <div className="list bg-(--color-bg) p-2  rounded-lg">
          <ul className="flex flex-col gap-2">
            {Object.entries(statusOrderByMapperFrontToURL).map(([k, v]) => {
              const statusC = statusCounts[v.replace("-", " ")];
              return (
                <HeaderColumnListItem
                  checkIfIsSelected={currentValue === k}
                  value={v}
                  filteredHandle={() => setFilter("status", k)}
                  statusCounts={statusC}
                  key={k}
                />
              );
            })}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default StatusHeaderColumn;
