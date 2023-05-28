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
  const res = await api.import.statisticsDoctorDetail(id)
  return res.data
}
export default function DoctorsStatsChart({ queryId }: { queryId: string }) {
  const { data: dashData, isLoading } = useQuery({
    queryKey: ["DoctorStatsChart"],
    queryFn: () => getData(queryId),
  })
  const labels = []
  const totalRecommendations = []
  const totalPatients = []
  dashData?.doctorStatistics?.map((doctor) => {
    labels.push(doctor.doctorPost)
    totalRecommendations.push(doctor.totalRecommendations)
    totalPatients.push(doctor.totalPatients)
  })
  const data = {
    labels,
    datasets: [
      {
        label: "Кол-во назначений",
        data: totalRecommendations,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132, 0.7)",
        tension: 0.4,
      },
      {
        label: "Кол-во пациентов",
        data: totalPatients,
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
            Всего врачей: {dashData?.totalDoctors}
          </p>
        </div>
      </div>
    </>
  )
}
