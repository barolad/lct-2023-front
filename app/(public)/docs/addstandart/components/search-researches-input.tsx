"use client"

import { useState } from "react"
import { Popover, PopoverTrigger } from "@radix-ui/react-popover"
import { useQuery } from "@tanstack/react-query"

import { api } from "@/lib/apiConnection"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PopoverContent } from "@/components/ui/popover"
import { useAddStandartStore } from "@/app/(public)/docs/addstandart/components/store"

async function getResearchsByValue(value) {
  const res = await api.analysis.searchAnalyses({ search: value })
  return res.data
}

export default function SearchResearchesInput() {
  const [inputValue, setInputValue] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)
  const addResearchToExport = useAddStandartStore(
    (state) => state.addResearchToExport
  )
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  const { data } = useQuery({
    queryKey: ["researchInputStandart", inputValue],
    queryFn: () => getResearchsByValue(inputValue),
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
          <Label>Введите название назначения</Label>
          <Input
            value={inputValue}
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
                  addResearchToExport({
                    id: research.id || -1,
                    analysisName: research.name,
                    isMandatory: true,
                  })
                }}
              >
                {research.name}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </>
  )
}
