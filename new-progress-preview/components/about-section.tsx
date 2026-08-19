import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      {/* Testimonial Style Section */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Testimonial 1 */}
          <div className="text-center px-4">
            <h3 className="text-sm tracking-[0.2em] text-foreground mb-2 uppercase">
              傳統與現代的交融
            </h3>
            <div className="w-8 h-px bg-primary mx-auto my-6" />
            <p className="text-sm text-foreground/70 leading-relaxed">
              「三合院的古老韻味與現代設計的完美結合，每個角落都讓人感受到用心。」
            </p>
            <p className="text-xs text-foreground/50 mt-6 tracking-wider">
              / 來自台北的旅人
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="text-center px-4">
            <h3 className="text-sm tracking-[0.2em] text-foreground mb-2 uppercase">
              完美的家庭旅行
            </h3>
            <div className="w-8 h-px bg-primary mx-auto my-6" />
            <p className="text-sm text-foreground/70 leading-relaxed">
              「帶著全家人入住，寬敞的空間和完善的設備，讓每個人都有賓至如歸的感覺。」
            </p>
            <p className="text-xs text-foreground/50 mt-6 tracking-wider">
              / 陳氏家族
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="text-center px-4">
            <h3 className="text-sm tracking-[0.2em] text-foreground mb-2 uppercase">
              遠離塵囂的世外桃源
            </h3>
            <div className="w-8 h-px bg-primary mx-auto my-6" />
            <p className="text-sm text-foreground/70 leading-relaxed">
              「這裡就像是我們的秘密基地，可以盡情享受私人空間，完全不被打擾。」
            </p>
            <p className="text-xs text-foreground/50 mt-6 tracking-wider">
              / 好友旅行團
            </p>
          </div>
        </div>
      </div>

      {/* Second Hero Image Section */}
      <div className="mt-20 md:mt-32 relative">
        <div className="flex flex-col md:flex-row-reverse">
          {/* Image - Right Side */}
          <div className="relative w-full md:w-3/4 h-[400px] md:h-[500px] md:ml-auto">
            <Image
              src="/images/sanheyue-exterior-front.jpeg"
              alt="彡禾悅民宿庭院外觀"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlapping Text Box - Left Side */}
          <div className="relative md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:w-[45%] bg-primary p-10 md:p-14">
            <h2 className="text-lg md:text-xl tracking-[0.2em] text-white mb-6 uppercase">
              專屬您的海島時光
            </h2>
            <p className="text-sm md:text-base text-white/90 leading-relaxed tracking-wide">
              彡禾悅提供完整的包棟服務，最多可容納 12 位貴賓。無論是家族聚會、好友旅行或是特別的慶祝活動，我們都能為您打造一段難忘的回憶。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
