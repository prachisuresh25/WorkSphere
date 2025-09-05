import { LoginForm } from "@/components/auth/login-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-gray-600">
              Or{" "}
              <Link href="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
                create a new account
              </Link>
            </p>
          </div>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
