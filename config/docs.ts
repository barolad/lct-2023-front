import { IDocsConfig } from "@/types"

export const navConfig: IDocsConfig = {
  sidebarNav: [
    {
      title: "МКБ-10",
      href: "/docs/mkb10",
    },
    {
      title: "Исследования",
      href: "/docs/researches",
    },
    {
      title: "Нов. стандарт",
      href: "/docs/addstandart",
    },
  ],
  mainNav: [
    {
      title: "Справочники",
      href: "/docs",
    },
    {
      title: "Поддержка",
      href: "/support",
      disabled: true,
    },
  ],
}
