import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { RoomsSection } from "@/components/rooms-section"
import { BookingSection } from "@/components/booking-section"
import { ExperiencesSection } from "@/components/experiences-section"
import { RulesSection } from "@/components/rules-section"
import { Footer } from "@/components/footer"
import { LineButton } from "@/components/line-button"

export default function Home() {
  return (
    <main className="bg-background">
      {/* 導航列 */}
      <Navigation />

      {/* 主視覺區 */}
      <HeroSection />

      {/* 評價與關於我們 */}
      <AboutSection />

      {/* 空間與設備 */}
      <AmenitiesSection />

      {/* 客房資訊 */}
      <RoomsSection />

      {/* 預約流程 */}
      <BookingSection />

      {/* 代訂體驗 */}
      <ExperiencesSection />

      {/* 住宿規則 */}
      <RulesSection />

      {/* 頁尾與聯繫方式 */}
      <Footer />

      {/* LINE 預約按鈕 */}
      <LineButton />
    </main>
  )
}
