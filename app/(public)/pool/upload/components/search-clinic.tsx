"use client"

import React from "react"
import { useQuery } from "@tanstack/react-query"
import { AlertCircle, ChevronsUpDown, Loader2 } from "lucide-react"

import { api } from "@/lib/apiConnection"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import { useUploadCardStore } from "@/app/(public)/pool/upload/components/store"

async function fetchClinics() {
  const { data } = await api.clinic.getClinicsShort({ limit: 300 })
  return data
}
export default function SearchClinic() {
  const selectedClinic = useUploadCardStore((state) => state.selectedClinic)
  const setUploadClinic = useUploadCardStore((state) => state.setUploadClinic)
  const {
    data: clinics,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["clinics"],
    queryFn: fetchClinics,
    refetchOnWindowFocus: false,
  })

  const [open, setOpen] = React.useState<boolean>(false)
  const [inputValue, setInputValue] = React.useState<string>("")
  return (
    <>
      {isError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle className="ml-6">Ошибка</AlertTitle>
          <AlertDescription>
            Не удалось загрузить данные мед. учреждений.
          </AlertDescription>
        </Alert>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          {isLoading ? (
            <Skeleton className="h-10 w-full" />
          ) : (
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="min-w-full justify-between"
              disabled={isLoading}
            >
              {selectedClinic.name ||
                "Введите название медицинской организации"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          )}
        </PopoverTrigger>
        <PopoverContent align="start" className="max-h-[300px]  p-0">
          <Command>
            <CommandInput
              onValueChange={(value) => setInputValue(value)}
              value={inputValue}
            />
            <CommandList>
              <CommandEmpty></CommandEmpty>

              <CommandGroup>
                {clinics?.map((clinic) => (
                  <CommandItem
                    key={clinic.id}
                    onSelect={(currentValue) => {
                      setUploadClinic(
                        currentValue === selectedClinic.name
                          ? { name: "", id: -1 }
                          : {
                              name: currentValue.toUpperCase(),
                              id: clinic.id,
                            }
                      )
                      setOpen(false)
                    }}
                  >
                    <div>
                      <h6 className="line-clamp-1">
                        {clinic.name}
                        {clinic?.filial && `, филиал ${clinic.filial}`}{" "}
                      </h6>
                      <p className="line-clamp-1 text-sm text-muted-foreground">
                        {clinic.address}
                      </p>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  )
}
