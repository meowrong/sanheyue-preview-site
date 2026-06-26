"use client"

import { MessageCircle } from "lucide-react"

export function LineButton() {
  return (
    <a
      href="https://line.me/ti/p/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#06C755] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      aria-label="LINE 預約"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
