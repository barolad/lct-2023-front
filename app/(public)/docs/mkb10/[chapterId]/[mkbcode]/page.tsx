import Link from "next/link"

import { api } from "@/lib/apiConnection"
import { buttonVariants } from "@/components/ui/button"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { EmptyHeader } from "@/components/header-with-description"

export default async function ({ params }: { params: { mkbcode: string } }) {
  const data = await (
    await api.mkb10.getStandartsByMkb10Id(Number(params.mkbcode))
  ).data
  return (
    <div className="space-y-8">
      <EmptyHeader
        heading={`Код ${data.mkb10Code}` || ""}
        text="Международная классификация болезней"
      />
      <div className="divide-y divide-border rounded-md border">
        {data.mkb10EsiliWithBools?.length === 0 ? (
          <EmptyPlaceholder className="border-solid">
            <EmptyPlaceholder.Icon name="file" />
            <EmptyPlaceholder.Title>Не найдено</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              Стандарт для {data.mkb10Code} отсутствует.
            </EmptyPlaceholder.Description>
            <Link
              href="/docs/addstandart"
              className={buttonVariants({ variant: "outline" })}
            >
              Добавить стандарт
            </Link>
          </EmptyPlaceholder>
        ) : (
          <>
            {data.mkb10EsiliWithBools?.map((mkb) => (
              <div className="flex items-center justify-between p-4  hover:bg-muted">
                <div className="grid gap-1">
                  <div className="font-semibold hover:underline">
                    {mkb.analysisName}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {mkb.isMandatory ? "Обязательный" : "Необязательный"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
