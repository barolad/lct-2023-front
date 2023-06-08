"use client"

import { formatDateLongMonth, generatePdf, getAge } from "@/lib/utils"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { useResultPageStore } from "@/app/(public)/pool/result/components/store"

export default function ActiveRowAlert() {
  const activeRow = useResultPageStore((state) => state.activeRow)
  const removeActiveRow = useResultPageStore((state) => state.removeActiveRow)
  const handleDownloadPdf = async () => {
    const content = document.getElementById("my-component")
    await generatePdf(content)
  }
  return (
    <>
      <AlertDialog open={activeRow !== null}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Результат анализа назначения</AlertDialogTitle>
            <AlertDialogDescription>
              {activeRow?.diagnosis}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-muted-foreground">Пациент:</p>
                <p>
                  {`${getAge(
                    activeRow?.birthDate || ""
                  )} (${formatDateLongMonth(activeRow?.birthDate || "")}), ${
                    activeRow?.sex
                  }`}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Врач:</p>
                <p>{activeRow?.doctorPost}</p>
              </div>
            </div>
            <div>
              <p className="text-muted-foreground">Назначения:</p>
              <Command className="mt-2 rounded-md border">
                <CommandInput></CommandInput>
                <CommandEmpty>Не найдено.</CommandEmpty>
                <CommandList>
                  {activeRow?.recommendations?.map((recommendationGroup) => (
                    <CommandGroup
                      heading={recommendationGroup.groupStatusName}
                      key={recommendationGroup.groupStatus}
                    >
                      {recommendationGroup.groupRecommendations?.map(
                        (recommendation) => (
                          <CommandItem key={recommendation}>
                            {recommendation}
                          </CommandItem>
                        )
                      )}
                    </CommandGroup>
                  ))}
                </CommandList>
              </Command>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground">Оценка:</p>
                <p className="font-semibold">
                  {activeRow?.accuracy}{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    из 100
                  </span>
                </p>
              </div>
              <Button variant="secondary" onClick={() => removeActiveRow()}>
                Закрыть
              </Button>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
