import Link from "next/link"

import { Mkb10Chapter } from "@/lib/Api"
import { api } from "@/lib/apiConnection"
import { EmptyHeader } from "@/components/header-with-description"

export default async function MKB10DocsPage() {
  const mkb10Chapters: Mkb10Chapter[] = (await api.mkb10.chapterList()).data
  return (
    <div className="space-y-8">
      <EmptyHeader
        heading="Справочник МКБ-10"
        text="Международная классификация болезней"
      />
      <div className="divide-y divide-border rounded-md border">
        {mkb10Chapters.map((chapter) => (
          <Link
            href={`/docs/mkb10/${chapter.id}`}
            className="flex items-center justify-between p-4  hover:bg-muted"
          >
            <div className="grid gap-1">
              <div className="font-semibold hover:underline">
                {chapter.chapter} {chapter.name}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{chapter.sub}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
