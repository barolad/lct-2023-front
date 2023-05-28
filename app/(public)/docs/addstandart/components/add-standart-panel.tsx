"use client"

import { useMutation } from "@tanstack/react-query"

import { api } from "@/lib/apiConnection"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { EmptyHeader } from "@/components/header-with-description"
import SearchMkbsInput from "@/app/(public)/docs/addstandart/components/search-mkbs-input"
import SearchResearchesInput from "@/app/(public)/docs/addstandart/components/search-researches-input"
import { useAddStandartStore } from "@/app/(public)/docs/addstandart/components/store"

async function postStandart(analysesWBools, mkb10Codes) {
  const res = await api.mkb10.addStandarts({
    analysesWBools: analysesWBools.map((analyse) => ({
      analysisId: analyse.id,
      isMandatory: analyse.isMandatory,
    })),
    mkb10Codes: mkb10Codes.map((mkb) => mkb.code),
  })
  return res.data
}

export default function AddStandartPanel() {
  const { mutate } = useMutation({
    mutationKey: ["addStandart"],
    mutationFn: () => postStandart(researchesToExport, mkbsToExport),
    onSuccess() {
      reset()
    },
  })
  const mkbsToExport = useAddStandartStore((state) => state.mkbsToExport)
  const reset = useAddStandartStore((state) => state.reset)
  const changeIsMandatoryInResearch = useAddStandartStore(
    (state) => state.changeIsMandatoryInResearch
  )
  const researchesToExport = useAddStandartStore(
    (state) => state.researchesToExport
  )
  const onClickButtonHandler = () => {
    mutate()
  }
  return (
    <div className="space-y-8">
      <EmptyHeader
        heading="Добавление стандарта"
        text="Страница добавления стандарта в базу данных системы"
      >
        <Button onClick={() => onClickButtonHandler()}>Добавить</Button>
      </EmptyHeader>
      <div className="mx-1 grid grid-cols-2 gap-6">
        <div className="space-y-6">
          <SearchMkbsInput />
          <div className="space-y-2">
            {mkbsToExport.map((mkb) => (
              <div className="w-full rounded-md bg-muted p-2">
                {mkb.code} {mkb.name}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <SearchResearchesInput />
          <div className="space-y-2">
            {researchesToExport.map((research) => (
              <div className="flex w-full items-center justify-between rounded-md bg-muted p-2">
                <p>{research.analysisName}</p>
                <Checkbox
                  checked={research.isMandatory}
                  onMouseDown={() => changeIsMandatoryInResearch(research.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
