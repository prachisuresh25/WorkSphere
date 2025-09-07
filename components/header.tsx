"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogOut } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"
import { useAuth } from "@/contexts/auth-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()
  const { user, loading, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ServiceSphere</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t("home")}
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t("services")}
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t("howItWorks")}
            </Link>
            <Link href="/complaints" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t("complaints")}
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            {loading ? (
              <div className="w-16 h-8 bg-gray-200 animate-pulse rounded"></div>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium text-gray-700">
                    {user.user_metadata?.name || user.email}
                  </span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    {t("login")}
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    {t("signup")}
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                {t("home")}
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
                {t("services")}
              </Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">
                {t("howItWorks")}
              </Link>
              <Link href="/complaints" className="text-gray-700 hover:text-blue-600 font-medium">
                {t("complaints")}
              </Link>
              <div className="flex items-center justify-between pt-4 border-t">
                <LanguageSelector />
                {loading ? (
                  <div className="w-20 h-8 bg-gray-200 animate-pulse rounded"></div>
                ) : user ? (
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="text-sm font-medium text-gray-700">
                        {user.user_metadata?.name || user.email}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={handleSignOut}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <Link href="/login">
                      <Button variant="ghost" size="sm">
                        {t("login")}
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        {t("signup")}
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
