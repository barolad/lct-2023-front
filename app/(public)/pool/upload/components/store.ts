import { create } from "zustand"

import { InputErrorRead } from "@/lib/Api"

interface IUseUploadCardStore {
  selectedClinic: { name: string; id: number }

  setUploadClinic: (data: { name: string; id: number }) => void
  errors: InputErrorRead[]
  setErrors: (inputErrors: InputErrorRead[]) => void
  deleteError: (id: string) => void
  selectedFile: File
  setUploadFile: (file: File) => void
}
export const useUploadCardStore = create<IUseUploadCardStore>((set) => ({
  selectedClinic: { name: "", id: -1 },
  setUploadClinic: (data) => {
    set({
      selectedClinic: data,
    })
  },
  errors: [],
  deleteError: (id) =>
    set((state) => ({
      errors: state.errors.filter((error) => error.id != id),
    })),
  setErrors: (inputErrors) => set(() => ({ errors: inputErrors })),
  selectedFile: null,
  setUploadFile: (file) => {
    set({ selectedFile: file })
  },
}))
