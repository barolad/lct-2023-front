import { Icons } from "@/components/icons"

export interface ISiteConfig {
  name: string
  url: string
}
export interface ISidebarNavItem {
  title: string
  href: string
  disabled?: boolean
  icon?: keyof typeof Icons
}
export interface IDocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: ISidebarNavItem[]
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem
