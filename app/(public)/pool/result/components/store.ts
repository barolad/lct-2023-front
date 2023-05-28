import { create } from "zustand"

import { RecommendationGroup } from "@/lib/Api"

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
type IUseResultPageStore = {
  activeRow: IRow & null
  removeActiveRow: () => void
  setActiveRow: (row: IRow) => void
}

export const useResultPageStore = create<IUseResultPageStore>((set) => ({
  activeRow: null,
  setActiveRow: (row) => {
    set({ activeRow: row })
  },
  removeActiveRow: () => {
    set({
      activeRow: null,
    })
  },
}))
