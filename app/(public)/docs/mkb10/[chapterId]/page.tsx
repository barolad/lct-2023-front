import Link from "next/link"

import { api } from "@/lib/apiConnection"
import { EmptyHeader } from "@/components/header-with-description"

interface IMKB10ByChapterDocsPage {
  params: { chapterId: string }
}

export default async function MKB10ByChapterDocsPage({
  params,
}: IMKB10ByChapterDocsPage) {
  const data = (
    await api.mkb10.getMkb10SByChapter({
      chapterId: Number(params.chapterId),
    })
  ).data
  return (
    <div className="space-y-8">
      <EmptyHeader
        heading={data.name || ""}
        text="Международная классификация болезней"
      />
      <div className="divide-y divide-border rounded-md border">
        {data.mkb10s?.map((mkb) => (
          <div className="flex items-center justify-between p-4  hover:bg-muted">
            <div className="grid gap-1">
              <div className="font-semibold hover:underline">{mkb.name}</div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {`${mkb.litera}${mkb.number}`}
                  {mkb.subnumber !== null ? `.${mkb.subnumber}` : ""}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
