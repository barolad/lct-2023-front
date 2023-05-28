import Link from "next/link"

import { api } from "@/lib/apiConnection"
import { buttonVariants } from "@/components/ui/button"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { EmptyHeader } from "@/components/header-with-description"

export default async function IndexPage() {
  const uploads = (await api.import.lastRequestsList()).data
  return (
    <>
      <div className="min-h-screen space-y-6">
        <EmptyHeader
          heading="Последние запросы"
          text="Вернитесь к предыдущим или создайте новый"
        >
          <Link
            href="/pool/upload"
            className={buttonVariants({ variant: "secondary" })}
          >
            Новый запрос
          </Link>
        </EmptyHeader>
        {uploads.length ? (
          <div className="divide-y divide-border rounded-md border">
            {uploads.map((post) => (
              <Link
                href={`/pool/result/${post.inputId}`}
                className="flex items-center justify-between p-4  hover:bg-muted"
              >
                <div className="grid gap-1">
                  <div className="font-semibold hover:underline">
                    {post.inputName}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {post.inputId}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <EmptyPlaceholder className="border-solid">
            <EmptyPlaceholder.Icon name="file" />
            <EmptyPlaceholder.Title>Запросы не найдены</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              Вы ещё ни разу не отправляли запрос.
            </EmptyPlaceholder.Description>
            <Link
              href="/pool/upload"
              className={buttonVariants({ variant: "outline" })}
            >
              Новый запрос
            </Link>
          </EmptyPlaceholder>
        )}
      </div>
    </>
  )
}
