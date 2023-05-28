"use client"

import * as React from "react"
import { useMutation } from "@tanstack/react-query"
import { FileSpreadsheet } from "lucide-react"
import Dropzone from "react-dropzone"

import { api } from "@/lib/apiConnection"
import { cn } from "@/lib/utils"
import { useUploadCardStore } from "@/app/(public)/pool/upload/components/store"

export function UploadDropZone() {
  const selectedFile = useUploadCardStore((state) => state.selectedFile)
  const setUploadFile = useUploadCardStore((state) => state.setUploadFile)
  const isWithFile = selectedFile != null

  const handleDrop = async (acceptedFiles: File[]) => {
    setUploadFile(acceptedFiles[0])
  }
  return (
    <>
      <Dropzone
        onDrop={(acceptedFiles) => handleDrop(acceptedFiles)}
        minSize={1024}
        maxFiles={1}
        accept={{
          ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]:
            [".xlsx"],
        }}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject,
        }) => {
          const additionalClass = isDragAccept
            ? "bg-green-100 text-green-600"
            : isDragReject
            ? "bg-red-100 text-red-600"
            : isWithFile
            ? ""
            : ""
          return (
            <>
              <div
                className={cn(
                  "grid h-40 content-center rounded-lg border-2 border-dashed bg-muted text-center text-sm text-muted-foreground",
                  additionalClass
                )}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {isWithFile ? (
                  <>
                    <p>Файл {selectedFile.name} загружен.</p>{" "}
                    <p>Нажмите кнопку "Продолжить"</p>
                  </>
                ) : (
                  <>
                    <p>
                      Перетащите файл в эту область или выберите файл для
                      загрузки
                    </p>
                    <FileSpreadsheet className="mx-auto my-4 h-6 w-6" />
                    <p>Формат .XLSX</p>
                  </>
                )}
              </div>
            </>
          )
        }}
      </Dropzone>
    </>
  )
}
