"use client"

import { useEffect } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center text-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold md:text-4xl">
            Что-то пошло не так!
          </h2>
          <p className="text-lg text-muted-foreground">
            Повторите попытку или напишите в{" "}
            <Link
              href="https://t.me/barolad"
              className="text-blue-400 underline"
            >
              телеграм.
            </Link>
          </p>
        </div>
        <Button onClick={() => reset()} variant="destructive">
          Повторить запрос
        </Button>
      </div>
    </div>
  )
}
