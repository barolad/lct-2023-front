"use client"

import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"

import { api } from "@/lib/apiConnection"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { AlertDialogErrorsUpload } from "@/app/(public)/pool/upload/components/alert-dialog-errors-upload"
import SearchClinic from "@/app/(public)/pool/upload/components/search-clinic"
import { useUploadCardStore } from "@/app/(public)/pool/upload/components/store"
import { UploadDropZone } from "@/app/(public)/pool/upload/components/upload-drop-zone"

export function UploadCard() {
  const selectedClinic = useUploadCardStore((state) => state.selectedClinic)
  const selectedFile = useUploadCardStore((state) => state.selectedFile)
  const setErrors = useUploadCardStore((state) => state.setErrors)
  const { toast } = useToast()
  const router = useRouter()
  const { isLoading, mutate, data } = useMutation({
    mutationFn: (params: { data: File; query: string }) => {
      return api.import.importXlsx(
        { file: params.data },
        { name: params.query }
      )
    },
    onSuccess({ data }) {
      if (data.missingNames.length > 0) {
        setErrors(data.missingNames)
      } else {
        router.push(`pool/check/${data.inputId}`)
      }
    },
    onError(e) {
      toast({
        title: `Ошибка! ${e.response.data}.`,
        description: "Импорт файла не удался. Попробуйте ещё раз.",
      })
    },
  })
  return (
    <>
      <AlertDialogErrorsUpload uploadId={data?.data.inputId} />
      <Card>
        <CardHeader>
          <CardTitle>Новый запрос</CardTitle>
          <CardDescription>
            Введите название медцинской организации и загрузите таблицу с
            данными.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <SearchClinic />
          <UploadDropZone />
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            disabled={isLoading || !selectedClinic?.name || !selectedFile?.name}
            onClick={() =>
              mutate({
                data: selectedFile,
                query: selectedClinic.id.toString(),
              })
            }
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Продолжить
          </Button>
        </CardFooter>
      </Card>
      {}
    </>
  )
}
