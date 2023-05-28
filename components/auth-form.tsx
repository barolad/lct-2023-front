"use client"

import { cookies } from "next/headers"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { api } from "@/lib/apiConnection"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  email: z.string().optional(),
  password: z.string().optional(),
})

export default function AuthForm() {
  const router = useRouter()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await api.account.signIn({
        email: values.email || "string",
        password: values.password || "string",
      })
      toast({
        title: "Вход",
        description: "Вход был успешно произведён",
      })
      await router.push("/")
    } catch (e) {
      toast({
        title: "Ошибка",
        description: "Произошла ошибка. Повторите попытку позднее.",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Логин</FormLabel>
                <FormControl>
                  <Input {...field} type="text" defaultValue="string" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input {...field} type="password" defaultValue="string" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        </div>
        <Button type="submit" className="w-full">
          Войти
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          или с помощью
        </p>
        <Button
          variant="secondary"
          className="w-full text-muted-foreground"
          onClick={() =>
            toast({
              title: "Ошибка!",
              description:
                "Вход через сторонние сервисы на технических работах.",
            })
          }
        >
          MOS.RU
        </Button>
      </form>
    </Form>
  )
}
