import { MskAnalysisTypeGet } from "@/lib/Api"
import { api } from "@/lib/apiConnection"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EmptyHeader } from "@/components/header-with-description"
import { ResearchCommand } from "@/app/(public)/docs/components/research-command"

export default async function DocsResearchesPage() {
  const laboratoryResearches: MskAnalysisTypeGet[] = (
    await api.analysis.getAllAnalysesByType({
      type: "laboratory",
    })
  ).data
  const instrumentalResearches: MskAnalysisTypeGet[] = (
    await api.analysis.getAllAnalysesByType({
      type: "instrumental",
    })
  ).data
  // console.log(laboratoryResearches)
  return (
    <div className="space-y-8">
      <EmptyHeader
        heading="Справочник медицинских исследований"
        text="Лабораторные и инструментальные исследования "
      />
      <Tabs defaultValue="laboratory">
        <TabsList className="mb-8 w-full">
          <TabsTrigger value="laboratory" className="w-full">
            Лабораторные
          </TabsTrigger>
          <TabsTrigger value="instrumental" className="w-full">
            Инструментальные
          </TabsTrigger>
        </TabsList>
        <TabsContent value="laboratory" className="min-h-full">
          <ResearchCommand
            label="Лабораторные исследования"
            researchesData={laboratoryResearches}
          />
        </TabsContent>
        <TabsContent value="instrumental">
          <ResearchCommand
            label="Инструментальные исследования"
            researchesData={instrumentalResearches}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
