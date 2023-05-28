import Image from "next/image"
import { Stethoscope } from "lucide-react"

import AuthForm from "@/components/auth-form"

import authBackgroundImage from "../../public/auth-bg.jpg"

export default async function AuthPage() {
  return (
    <>
      <div className="container relative grid min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-3 lg:px-0 ">
        <div className="relative hidden h-full flex-col bg-muted p-10  dark:border-r lg:flex ">
          <Image
            className="absolute inset-0 bg-cover opacity-70"
            alt="Doctor"
            src={authBackgroundImage}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Stethoscope className="mr-2 h-6 w-6 text-primary" /> exilon.med
          </div>
        </div>
        <div className="lg:col-span-2 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Вход в систему
              </h1>
              <p className="text-sm text-muted-foreground">
                Введите данные, чтобы войти
              </p>
            </div>
            <AuthForm />
          </div>
        </div>
      </div>
    </>
  )
}
