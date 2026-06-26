import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="pt-20 bg-background">
      {/* Title Area */}
      <div className="text-center py-16 md:py-20 px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.15em] text-foreground mb-4">
          彡禾悅
        </h1>
        <p className="text-sm md:text-base tracking-[0.28em] text-foreground/55">
          小琉球包棟民宿・12 人專屬包棟
        </p>
      </div>

      {/* Hero Image */}
      <div className="px-6">
        <div className="mx-auto max-w-6xl">
          <Image
            src="/images/sanheyue-exterior-courtyard.jpeg"
            alt="彡禾悅民宿外觀"
            width={1920}
            height={1080}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Intro Text */}
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16 text-center">
        <div className="w-10 h-px bg-primary mx-auto mb-8" />
        <h2 className="text-lg md:text-xl tracking-[0.24em] text-foreground mb-6 uppercase">
          回家的感覺，不一定是在家。
        </h2>
        <p className="text-sm md:text-base text-foreground/70 leading-relaxed tracking-wide">
          在小琉球的三合院老宅裡，
          <br />
          和家人朋友一起慢慢生活幾天。
        </p>
      </div>
    </section>
  )
}
