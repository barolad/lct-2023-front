"use client"

import { useState } from "react"
import { Popover, PopoverTrigger } from "@radix-ui/react-popover"
import { useQuery } from "@tanstack/react-query"

import { api } from "@/lib/apiConnection"
import { CommandItem, CommandList } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PopoverContent } from "@/components/ui/popover"
import { useAddStandartStore } from "@/app/(public)/docs/addstandart/components/store"

async function getMkbsByValue(value) {
  const res = await api.mkb10.searchInMkb10({ search: value, limit: 10 })
  return res.data
}

export default function SearchMkbsInput() {
  const [inputValue, setInputValue] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)
  const addMkbToExport = useAddStandartStore((state) => state.addMkbToExport)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  const { data } = useQuery({
    queryKey: ["mkbsInputStandart", inputValue],
    queryFn: () => getMkbsByValue(inputValue),
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
          <Label>Введите код МКБ-10</Label>
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
            {data?.map((mkb) => (
              <div
                className="rounded-md px-1 hover:cursor-pointer hover:bg-muted"
                onMouseDown={() => {
                  addMkbToExport(mkb)
                }}
              >
                {mkb.code} {mkb.name}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </>
  )
}
