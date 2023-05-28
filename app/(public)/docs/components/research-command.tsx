"use client"

import { useState } from "react"

import { MskAnalysisTypeGet } from "@/lib/Api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

interface IResearchCommand {
  label: string
  researchesData: MskAnalysisTypeGet[]
}
interface ICardElement {
  type: string
  class: string
  category: string
  name: string
  id: number
  analogs: string[]
}
export function ResearchCommand({ label, researchesData }: IResearchCommand) {
  const [activeElement, setActiveElement] = useState<ICardElement>({
    id: -1,
    name: "123123",
    category: "",
    class: "",
    type: "",
    analogs: [],
  })

  return (
    <div className="grid gap-6 lg:grid-cols-2 ">
      <Command label={label} className="rounded-md border ">
        <CommandInput placeholder="Поиск по исследованиям..." />
        <CommandEmpty>Ничего не найдено.</CommandEmpty>
        <CommandList className="max-h-[500px]">
          {researchesData[0].classes?.map((researchClass) => (
            <CommandGroup heading={researchClass.name} key={researchClass.id}>
              {researchClass.categories?.map((researchCategory) =>
                researchCategory.analyses?.map((researchElement) => (
                  <CommandItem
                    key={researchElement.id}
                    onSelect={() => {
                      setActiveElement({
                        id: researchElement.id || -1,
                        name: researchElement.name || "",
                        category: researchCategory.name || "",
                        class: researchClass.name || "",
                        type: researchesData[0].name || "",
                        analogs: researchElement.analogs || [],
                      })
                    }}
                  >
                    {researchElement.name}
                  </CommandItem>
                ))
              )}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
      <Card className=" h-full">
        {activeElement.id > 0 ? (
          <>
            <CardHeader>
              <CardTitle>
                {activeElement.id >= 0 && activeElement.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {`${activeElement.type} / ${activeElement.class} / ${activeElement.category} / ${activeElement.name}`}
            </CardContent>
            {!!activeElement.analogs.length && (
              <CardHeader>
                <CardTitle>Аналогичные названия:</CardTitle>
              </CardHeader>
            )}
            <CardContent>
              {activeElement.analogs.map((analog) => (
                <div>{analog}</div>
              ))}
            </CardContent>
          </>
        ) : (
          <CardContent className="text-center">
            <div className="mt-6 text-muted-foreground">
              Выберите элемент из списка для отображения подробной информации
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
