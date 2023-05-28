import { UploadCard } from "@/app/(public)/pool/upload/components/upload-card"

export default async function UploadPage() {
  return (
    <>
      <div className="min-h-screen">
        <div className="mx-auto lg:w-3/4 xl:w-1/2">
          <UploadCard />
        </div>
      </div>
    </>
  )
}
