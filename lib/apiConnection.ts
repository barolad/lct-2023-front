import { Api } from "@/lib/Api"

export const api = new Api({
  // baseURL: `${process.env.HOST}/api`,
  baseURL: "http://89.232.161.201/api",
  // withCredentials: true,
})
