import { Api } from "@/lib/Api"

export const api = new Api({
  baseURL: "https://unitrip.ru/api",
  withCredentials: true,
  httpsAgent: {
    rejectUnauthorized: false,
  },
})
