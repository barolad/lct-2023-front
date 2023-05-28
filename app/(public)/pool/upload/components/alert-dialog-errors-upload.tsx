import { useState } from "react"
import { useRouter } from "next/navigation"
import { AlertDialog } from "@radix-ui/react-alert-dialog"

import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import FindResearchesUploadAlert from "@/app/(public)/pool/upload/components/find-researches-upload-alert"
import { useUploadCardStore } from "@/app/(public)/pool/upload/components/store"

export function AlertDialogErrorsUpload({ uploadId }) {
  const errors = useUploadCardStore((state) => state.errors)
  const deleteError = useUploadCardStore((state) => state.deleteError)
  const router = useRouter()
  const [openAlertDialog, setOpenAlertDialog] = useState<boolean>(false)
  const deleteErrorHandler = (id: string) => {
    deleteError(id || "")
    if (!(errors.length > 0)) {
      router.push(`pool/check/${uploadId}`)
    }
  }
  return (
    <>
      <AlertDialog open={openAlertDialog || errors.length > 0}>
        <AlertDialogContent className="max-h-screen min-w-full overflow-y-scroll">
          <AlertDialogHeader>
            <AlertDialogTitle>Обнаружены ошибки</AlertDialogTitle>
            <AlertDialogDescription>
              Исправьте ошибки для дальнейшей работы.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="space-y-2">
            {errors.map((error) => (
              <div
                className="min-h-12 grid w-full grid-cols-3 items-center gap-6 rounded-md bg-muted px-6 py-5"
                key={error.id}
              >
                <div>{error.diagnosisName}</div>
                <FindResearchesUploadAlert analogId={error.id || ""} />
              </div>
            ))}
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
