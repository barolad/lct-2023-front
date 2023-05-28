import { ClassValue, clsx } from "clsx"
import JsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import { twMerge } from "tailwind-merge"

import { fontForExport } from "@/config/font-for-export"
import { RecommendationGroup } from "@/lib/Api"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAge(input: string | number): string {
  const birthDate = new Date(input)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--
  }
  let ageWord = "лет"
  if (age % 10 === 1 && age !== 11) {
    ageWord = "год"
  } else if (age % 10 >= 2 && age % 10 <= 4 && (age < 10 || age > 20)) {
    ageWord = "года"
  }
  return age + " " + ageWord
}

export function formatDateLongMonth(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("ru-RU", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("ru-RU", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  })
}
type IRow = {
  id: number
  sex: string
  birthDate: string
  date: string
  diagnosis: string
  doctorPost: string
  accuracy?: number
  recommendations: RecommendationGroup[] | null
}
export const generatePdf = async (data: IRow[], exportId, creationDate) => {
  const doc = new JsPDF("l")
  let totalPagesExp = "{total_pages_count_string}"
  console.log(data)
  doc.addFileToVFS("PTSans-Regular-normal.ttf", fontForExport)
  doc.addFont("PTSans-Regular-normal.ttf", "PTSans-Regular", "normal")
  doc.setFont("PTSans-Regular")
  autoTable(doc, {
    styles: {
      font: "PTSans-Regular",
    },
    head: [
      [
        "Пациент",
        "Дата приёма",
        "Диагноз",
        "Специальность врача",
        "Рекомендации",
        "Оценка",
      ],
    ],
    body: data?.map((el) => {
      return [
        `${el?.id} ${el?.sex} ${getAge(el?.birthDate || "")} (${
          el?.birthDate
        })`,
        el?.date,
        el?.diagnosis,
        el?.doctorPost,
        el?.recommendations?.map((recommendationGroup) => {
          return (
            recommendationGroup.groupStatusName +
            ": " +
            recommendationGroup.groupRecommendations?.map(
              (recommendation) => recommendation
            )
          )
        }),
        el?.accuracy,
      ]
    }),
    didDrawPage: function (data) {
      // Header
      doc.setFontSize(20)
      doc.setTextColor(40)
      doc.text(
        `Отчёт exilon.med №${exportId} от ${formatDateLongMonth(creationDate)}`,
        data.settings.margin.left,
        22
      )
    },
    margin: { top: 30 },
  })
  if (typeof doc.putTotalPages === "function") {
    doc.putTotalPages(totalPagesExp)
  }
  doc.save(`export-table-${exportId}`)
}

// export function absoluteUrl(path: string) {
//     return `${env.NEXT_PUBLIC_APP_URL}${path}`
// }
