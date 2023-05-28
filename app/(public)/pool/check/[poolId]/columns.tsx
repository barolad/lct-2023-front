"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/table-reusalbe/data-table-sortable-headers"
import { CheckTableData } from "@/app/(public)/pool/check/[poolId]/page"
import { deleteRowInCheckUploadTable } from "@/app/actions"

export const columns: ColumnDef<CheckTableData>[] = [
  {
    accessorKey: "sex",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Пол" />
    ),
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
    accessorKey: "recommendations",
    header: "Выданные направления",
    cell: ({ row }) => {
      const recommendations = row.getValue("recommendations")
      return recommendations.map((el) => <p>{el}</p>)
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
          onClick={() => deleteRowInCheckUploadTable(originalRow.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )
    },
  },
]
