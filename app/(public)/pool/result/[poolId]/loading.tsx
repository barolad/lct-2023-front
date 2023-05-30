import { Skeleton } from "@/components/ui/skeleton"
import { EmptyHeader } from "@/components/header-with-description"

function PostSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  )
}

export default function Loading() {
  return (
    <div className="space-y-20">
      <EmptyHeader
        heading="Результат импорта"
        text="Изучите результат анализа файла, экспортируйте результат"
      />
      <div className="divide-y divide-border rounded-md border">
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </div>
    </div>
  )
}
