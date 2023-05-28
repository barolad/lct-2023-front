import Link from "next/link"

import { UserDiagnosticInputGet } from "@/lib/Api"
import { api } from "@/lib/apiConnection"
import { buttonVariants } from "@/components/ui/button"
import { EmptyHeader } from "@/components/header-with-description"
import { columns } from "@/app/(public)/pool/check/[poolId]/columns"
import { CheckUploadTable } from "@/app/(public)/pool/check/[poolId]/data-table"

interface CheckUploadPageProps {
  params: { poolId: string }
}

async function getDataForTable(poolId) {
  const res = await api.import.searchInput(poolId)
  return res.data
}
export interface CheckTableData {
  id: number
  patientId: number
  sex: string
  diagnosis: string
  doctorPost: string
  recommendations: string
}

export default async function CheckUploadPage({
  params,
}: CheckUploadPageProps) {
  const data: UserDiagnosticInputGet = await getDataForTable(params.poolId)
  const tableData = data?.inputDatas?.map((item) => ({
    id: item.id,
    patientId: item.patientId,
    sex: item.sex,
    diagnosis: item.mkbCode + " " + item.diagnosis,
    doctorPost: item.doctorPost,
    recommendations: item.recommendations,
  }))
  return (
    <>
      <div className="min-h-screen items-start space-y-8">
        <EmptyHeader
          heading="Проверка импорта"
          text="Проверьте данные из таблицы, при необходимости отредактируйте результат"
        >
          <Link
            href={`/pool/result/${params.poolId}`}
            prefetch={false}
            className={buttonVariants({ variant: "default" })}
          >
            Продолжить
          </Link>
        </EmptyHeader>
        <CheckUploadTable columns={columns} data={tableData} />
        <div className="h-24 w-full"></div>
        <div className="fixed bottom-0 left-0 z-40 w-full border-t bg-background">
          <div className="container flex h-16 items-center justify-end overflow-hidden py-4">
            <Link
              href={`/pool/result/${params.poolId}`}
              prefetch={false}
              className={buttonVariants({ variant: "default" })}
            >
              Продолжить
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
