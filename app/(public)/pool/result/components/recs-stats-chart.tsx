"use client"

import React from "react"
import { useQuery } from "@tanstack/react-query"
import {
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js"
import { Line } from "react-chartjs-2"

import { api } from "@/lib/apiConnection"
import { Skeleton } from "@/components/ui/skeleton"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const options: ChartOptions<"line"> = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        drawTicks: false,
      },
      ticks: {
        stepSize: 5,
        padding: 10,
      },
    },
  },
}
async function getData(id: string) {
  const res = await api.import.statisticsRecommendationDetail(id)
  return res.data
}

export default function RecommendationStatsChart({
  queryId,
}: {
  queryId: string
}) {
  const { data: dashData, isLoading } = useQuery({
    queryKey: ["RecommendationStatsChart"],
    queryFn: () => getData(queryId),
  })
  const labels = []
  const totalRecommendations = []
  dashData?.recommendationTypeStatistics?.map((recommendation) => {
    if (recommendation.totalRecommendations > 5) {
      labels.push(recommendation.recommendationType)
      totalRecommendations.push(recommendation.totalRecommendations)
    }
  })
  const data = {
    labels,
    datasets: [
      {
        label: "Количество назначений",
        data: totalRecommendations,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132, 0.7)",
        tension: 0.4,
        fill: true,
      },
    ],
  }
  if (isLoading) {
    return <Skeleton className="h-[300px] w-ful rounded-md" />
  }
  return (
    <>
      <Line options={options} data={data} className="text-[0px]" />
    </>
  )
}
