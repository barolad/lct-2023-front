"use client"

import React, { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js"
import { Bar } from "react-chartjs-2"

import { api } from "@/lib/apiConnection"
import { Skeleton } from "@/components/ui/skeleton"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  legend: {
    display: false,
  },
  type: "bar",
}

async function getData(id: string) {
  const res = await api.import.statisticsPatientDetail(id)
  return res.data
}
export default function PatientStatsChart({ queryId }: { queryId: string }) {
  const { data: dashData, isLoading } = useQuery({
    queryKey: ["PatientStatsChart"],
    queryFn: () => getData(queryId),
  })
  const labels = []
  const patientsCountData = []
  const patientsAgeData = []
  dashData?.patientStatistics?.map((patient) => {
    if (patient.totalPatients > 5) {
      labels.push(patient.mkbCode)
      patientsCountData.push(patient.totalPatients)
      patientsAgeData.push(patient.averageAge)
    }
  })
  const data = {
    labels,
    datasets: [
      {
        label: "Количество пациентов",
        data: patientsCountData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132, 0.7)",
        tension: 0.4,
      },
      {
        label: "Средний возраст",
        data: patientsAgeData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgb(53, 162, 235, 0.7)",
        tension: 0.4,
      },
    ],
  }
  if (isLoading) {
    return <Skeleton className="h-[300px] w-full rounded-md" />
  }
  return (
    <>
      <div>
        <Bar options={options} data={data} />
        <div className="w-full">
          <p className="mt-2 text-right text-muted-foreground">
            Всего пациентов: {dashData?.totalPatients}
          </p>
        </div>
      </div>
    </>
  )
}
