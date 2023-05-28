"use client"

import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface ClientProviderProps {
  children?: React.ReactNode
}

export default function ClientProvider({ children }: ClientProviderProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  )
}
