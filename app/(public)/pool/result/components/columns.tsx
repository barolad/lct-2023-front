"use client"

import { ColumnDef } from "@tanstack/react-table"
import { FileSearch } from "lucide-react"

import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/table-reusalbe/data-table-sortable-headers"
import { CheckTableData } from "@/app/(public)/pool/check/[poolId]/page"
import { useResultPageStore } from "@/app/(public)/pool/result/components/store"

const setActiveRow = useResultPageStore.getState().setActiveRow

export const columns: ColumnDef<CheckTableData>[] = [
  {
    accessorKey: "sex",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Пол" />
    ),
  },
  {
    accessorKey: "birthDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Дата рождения" />
    ),
    cell: ({ row }) => {
      const birthDate: string = row.getValue("birthDate")
      return formatDate(birthDate)
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Дата приёма" />
    ),
    cell: ({ row }) => {
      const date: string = row.getValue("date")
      return formatDate(date)
    },
  },
  {
    accessorKey: "diagnosis",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Диагноз" />
    ),
  },
  {
    accessorKey: "doctorPost",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Специальность врача" />
    ),
  },
  {
    accessorKey: "accuracy",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Оценка" />
    ),
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium">
          {row.getValue("accuracy")}
        </div>
      )
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      const originalRow = row.original
      return (
        <Button
          variant="ghost"
          className="h-8 w-8 p-0"
          onClick={() => {
            setActiveRow(originalRow)
            console.log(originalRow)
          }}
        >
          <FileSearch className="h-4 w-4" />
        </Button>
      )
    },
  },
]
