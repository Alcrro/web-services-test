"use client";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import styles from "@/components/styles/tableView.module.scss";
import { cn } from "@/lib/utils";
import { IMetaPagination } from "@/modules/globals/types/types";
import PaginationV2 from "./pagination/PavinationV2";
import React from "react";
import { useGoToPage } from "@/shared/utils/goToPage";

export type TableProps<T = unknown, TValue = unknown> = {
  data: T[];
  columns: ColumnDef<T, TValue>[];
  meta: IMetaPagination;
  className?: string;
};
interface ColumnMeta {
  className?: React.CSSProperties;
}
const DefaultTable = <T,>({ data, columns, meta }: TableProps<T>) => {
  const memoColumns = React.useMemo(() => columns, [columns]);
  const memoData = React.useMemo(() => data, [data]);

  const currentPage = React.useMemo(() => meta.page ?? 1, [meta.page]);
  const goToPage = useGoToPage();
  const table = useReactTable({
    data: memoData,
    meta: meta,
    columns: memoColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  const totalPages = React.useMemo(
    () => meta.totalPages ?? 1,
    [meta.totalPages]
  );

  return (
    <div className="overflow-x-auto w-full">
      <div className="hidden sm:flex flex-col">
        <table className="min-h-full flex-1">
          <thead className="">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 text-center text-sm font-medium "
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700 border-collapse overflow-y-auto flex-1 ">
            {table.getRowModel().rows.map((row, rowIndex) => {
              const isFirstRow = rowIndex === 0;
              const isLastRow =
                rowIndex === table.getRowModel().rows.length - 1;
              return (
                <React.Fragment key={row.id}>
                  <tr
                    className={` cursor transition-colors ${
                      isLastRow ? "rounded-b-lg" : ""
                    } ${isFirstRow ? "rounded-t-lg" : ""}`}
                  >
                    {row.getVisibleCells().map((cell, cellIndex) => {
                      const isFirstCell = cellIndex === 0;
                      const isLastCell =
                        cellIndex === row.getVisibleCells().length - 1;
                      return (
                        <td
                          key={cell.id}
                          className={cn(
                            "px-4 py-2 text-center text-sm text-gray-600 dark:text-gray-300",
                            (cell.column.columnDef.meta as ColumnMeta)
                              ?.className,
                            isFirstRow && isFirstCell && "rounded-tl-lg",
                            isFirstRow && isLastCell && "rounded-tr-lg",
                            isLastRow &&
                              isFirstCell &&
                              data.length === 10 &&
                              "rounded-bl-lg",
                            isLastRow &&
                              isLastCell &&
                              data.length === 10 &&
                              "rounded-br-lg"
                          )}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                  {row.getIsExpanded() &&
                    row.subRows.map((subRow) => (
                      <tr
                        key={subRow.id}
                        className="bg-gray-50 dark:bg-gray-800 h-[57px]"
                      >
                        {subRow.getVisibleCells().map((cell) => (
                          <td
                            key={cell.id}
                            className="px-4 py-2 text-center text-sm text-gray-600 dark:text-gray-300"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                </React.Fragment>
              );
            })}
            {/* 👇 Placeholder row to fill remaining height */}
            {/* Fallback to fill remaining height */}
            {table.getRowModel().rows.length < 10 && (
              <tr
                data-rows-missing={10 - table.getRowModel().rows.length}
                className={`${styles.tableFiller}`}
              >
                <td
                  className="rounded-b-xl"
                  colSpan={table.getAllColumns().length}
                ></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="block sm:hidden">
        <table className="min-w-full ">
          <tbody className="">
            {table.getRowModel().rows.map((row) => (
              <React.Fragment key={row.id}>
                <tr key={row.id} className=" ">
                  <td colSpan={row.getVisibleCells().length} className="p-0">
                    <div className="p-2 mb-1 bg-white dark:bg-gray-900 border-separate border-spacing-0 rounded-lg overflow-hidden shadow">
                      {row.getVisibleCells().map((cell) => (
                        <div
                          key={cell.id}
                          className="flex justify-between max-[420px]:flex-col max-[420px]:items-center p-2"
                        >
                          <span className="font-medium text-gray-700 dark:text-gray-200">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </span>
                          <span className="text-gray-600 dark:text-gray-300">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
                {row.getIsExpanded() &&
                  row.subRows.map((subRow) => (
                    <tr key={subRow.id}>
                      <td colSpan={subRow.getVisibleCells().length}>
                        {/* Subrow */}
                      </td>
                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bts flex justify-center gap-4 py-2">
        <PaginationV2
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </div>
    </div>
  );
};
export default DefaultTable;
