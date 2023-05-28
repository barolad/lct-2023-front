"use client"

import Link from "next/link"
import { usePathname, useSelectedLayoutSegment } from "next/navigation"
import { MainNavItem } from "@/types"
import { Stethoscope } from "lucide-react"

import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: MainNavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  console.log(segment)
  return (
    <div className="flex gap-6 md:gap-10">
      <Link className="flex items-center text-lg font-medium" href="/">
        <Stethoscope className="mr-2 h-6 w-6 text-primary " /> exilon.med
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  )
}
