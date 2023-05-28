"use client"

import { generatePdf } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

export default function ExportButton({ data, exportId, creationDate }) {
  return (
    <Button
      onClick={() => generatePdf(data, exportId, creationDate)}
      className={buttonVariants({ variant: "default" })}
    >
      Экспорт
    </Button>
  )
}
