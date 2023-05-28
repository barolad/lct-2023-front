import { create } from "zustand"

import { Mkb10WCode } from "@/lib/Api"

interface IResearch {
  id: number
  analysisName: string
  isMandatory: boolean
}

interface IUseAddStandartStore {
  mkbsToExport: Mkb10WCode[]
  researchesToExport: IResearch[]
  addResearchToExport: (research: IResearch) => void
  addMkbToExport: (mkb: Mkb10WCode) => void
  changeIsMandatoryInResearch: (id: number) => void
  reset: () => void
}
export const useAddStandartStore = create<IUseAddStandartStore>((set) => ({
  mkbsToExport: [],
  researchesToExport: [],
  changeIsMandatoryInResearch: (id) =>
    set((state) => ({
      researchesToExport: state.researchesToExport.map((research) =>
        research.id === id
          ? { ...research, isMandatory: !research.isMandatory }
          : research
      ),
    })),
  addMkbToExport: (mkb) =>
    set((state) => ({ mkbsToExport: [...state.mkbsToExport, mkb] })),
  addResearchToExport: (research) =>
    set((state) => ({
      researchesToExport: [...state.researchesToExport, research],
    })),
  reset: () => set(() => ({ mkbsToExport: [], researchesToExport: [] })),
}))
