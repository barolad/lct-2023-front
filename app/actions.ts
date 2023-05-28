"use server"

import { revalidatePath } from "next/cache"

import { api } from "@/lib/apiConnection"

export async function deleteRowInCheckUploadTable(id) {
  await api.import.deleteData(id)
  revalidatePath(`/pool/check/`)
}
