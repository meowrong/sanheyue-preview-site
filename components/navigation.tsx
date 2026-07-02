"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#home", label: "首頁" },
  { href: "#about", label: "關於民宿" },
  { href: "#amenities", label: "空間設備" },
  { href: "#rooms", label: "客房資訊" },
  { href: "#booking", label: "預約流程" },
  { href: "#experiences", label: "代訂體驗" },
  { href: "#contact", label: "聯繫我們" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm" 
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between gap-10">
          <a href="#home" className="text-xl tracking-[0.18em] text-foreground">
            彡禾悅
          </a>

          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.18em] text-foreground/65 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#booking"
            className="border border-foreground/30 px-5 py-2 text-xs tracking-[0.18em] text-foreground/75 transition-colors hover:border-primary hover:bg-primary hover:text-white"
          >
            立即預約
          </a>
        </div>

        {/* Mobile: Logo + Menu Button */}
        <div className="md:hidden flex items-center justify-between">
          <span className="text-xl tracking-wider text-foreground">彡禾悅</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border/50">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-foreground/70 py-2 hover:text-foreground transition-colors tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
