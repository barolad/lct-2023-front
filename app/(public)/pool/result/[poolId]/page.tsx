import { UserOutputRead } from "@/lib/Api"
import { api } from "@/lib/apiConnection"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EmptyHeader } from "@/components/header-with-description"
import ActiveRowAlert from "@/app/(public)/pool/result/components/active-row-alert"
import { columns } from "@/app/(public)/pool/result/components/columns"
import { ResultUploadTable } from "@/app/(public)/pool/result/components/data-table"
import DoctorsStatsChart from "@/app/(public)/pool/result/components/docs-stats-chart"
import ExportButton from "@/app/(public)/pool/result/components/export-button"
import PatientStatsChart from "@/app/(public)/pool/result/components/patient-stats-chart"
import RecommendationStatsChart from "@/app/(public)/pool/result/components/recs-stats-chart"

interface ResultUploadPageProps {
  params: { poolId: string }
}
async function getDataForTable(poolId) {
  const res = await api.import.getResultByGuid(poolId)
  return res.data
}

export default async function ({ params }: ResultUploadPageProps) {
  const data: UserOutputRead = await getDataForTable(params.poolId)
  const tableData = data?.outputDatas
    ?.filter((item) => {
      return item.standartExists === true
    })
    .map((item) => ({
      id: item.id,
      sex: item.sex,
      birthDate: item.birthDate,
      date: item.date,
      diagnosis: item.mkbCode + " " + item.diagnosis,
      doctorPost: item.doctorPost,
      accuracy: item.accuracy,
      recommendations: item.recommendationsGrouped,
    }))

  return (
    <div>
      <ActiveRowAlert />
      <div className="min-h-screen items-start space-y-8">
        <EmptyHeader
          heading="Результат импорта"
          text="Изучите результат анализа файла, экспортируйте результат"
        >
          <ExportButton
            data={tableData}
            exportId={data.id}
            creationDate={data.creationDate}
          />
        </EmptyHeader>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Анализ результата</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Анализ назначений</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PatientStatsChart queryId={params.poolId} />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Анализ врачей</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <DoctorsStatsChart queryId={params.poolId} />
                  </CardContent>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <ResultUploadTable data={tableData} columns={columns} />
      </div>
    </div>
  )
}
