"use client"

import { useState } from "react"
import { Popover, PopoverTrigger } from "@radix-ui/react-popover"
import { useMutation, useQuery } from "@tanstack/react-query"

import { MskAnalysisGet } from "@/lib/Api"
import { api } from "@/lib/apiConnection"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PopoverContent } from "@/components/ui/popover"
import { useUploadCardStore } from "@/app/(public)/pool/upload/components/store"

async function getResearchsByValue(value) {
  const res = await api.analysis.searchAnalyses({ search: value })
  return res.data
}

export default function FindResearchesUploadAlert({
  analogId,
}: {
  analogId: string
}) {
  const deleteError = useUploadCardStore((state) => state.deleteError)
  const [inputValue, setInputValue] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<MskAnalysisGet>({
    id: undefined,
    name: "",
    analogs: null,
  })
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  const { data } = useQuery({
    queryKey: ["researchInputUploadAlert", inputValue],
    queryFn: () => getResearchsByValue(inputValue),
  })
  const { mutate } = useMutation({
    mutationFn: (params: { analysisId: number; analogGuid: string }) => {
      return api.analysis.addAnalog({
        analysisId: params.analysisId,
        analogGuid: params.analogGuid,
      })
    },
    onSuccess() {
      deleteError(analogId)
    },
  })
  return (
    <>
      <Popover
        open={isOpen}
        onOpenChange={handleOpen}
        onClose={handleClose}
        autoFocus={false}
      >
        <PopoverTrigger className="w-full text-left">
          <Input
            value={selectedValue.name || inputValue}
            // disabled={!!selectedValue.name}
            autoFocus={true}
            onBlur={handleClose}
            onMouseDown={handleOpen}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </PopoverTrigger>
        <PopoverContent autoFocus={false} className="p-1" align="start">
          {!data && <p className="text-center">Не найдено</p>}
          <div className="max-h-[250px] space-y-1 overflow-y-scroll">
            {data?.map((research) => (
              <div
                className="rounded-md px-1 hover:cursor-pointer hover:bg-muted"
                onMouseDown={() => {
                  handleClose()
                  setSelectedValue(research)
                }}
              >
                {research.name}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
      <Button
        onClick={() => {
          mutate({ analysisId: selectedValue.id, analogGuid: analogId })
        }}
      >
        Исправить
      </Button>
    </>
  )
}
