import Link from "next/link"
import { Stethoscope, Upload } from "lucide-react"

import { navConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { UserAccountNav } from "@/components/user-account-nav"

interface PublicLayoutProps {
  children?: React.ReactNode
}

export default async function PublicLayout({ children }: PublicLayoutProps) {
  // const user: UserGet = (await api.account.getUser()).data
  // if (!user) {
  //   notFound()
  // }
  const user = {
    login: "string",
    role: "Главный врач",
    name: "Тест",
    surname: "Тестович",
  }

  console.log(user)
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background ">
        <div className="container flex h-16 items-center justify-between overflow-hidden py-4">
          <div>
            <MainNav items={navConfig.mainNav} />
          </div>
          <div className="space-x-2 md:space-x-6 ">
            <Link
              href="/pool/upload"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              <p className="hidden md:flex">Новый запрос</p>
              <Upload className="h-4 w-4 md:hidden" />
            </Link>
            <UserAccountNav user={user} />
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 ">
        {/*md:grid-cols-[200px_1fr]*/}
        {/*<aside className="hidden w-[200px] flex-col md:flex"></aside>*/}
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <footer className="border-t" />
    </div>
  )
}
