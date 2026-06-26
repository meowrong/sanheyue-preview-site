export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm tracking-[0.3em] text-foreground/70 uppercase mb-8">
            空間與設備
          </h2>
          <div className="w-12 h-px bg-primary mx-auto" />
        </div>

        {/* Block 1: 娛樂相聚 - Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center mb-32 md:mb-40">
          {/* Photo Placeholder - Left */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] bg-muted flex items-center justify-center">
            <span className="text-foreground/30 text-sm tracking-wider">照片預留位</span>
          </div>
          
          {/* Text - Right */}
          <div className="w-full md:w-1/2 px-6 md:px-16 py-12 md:py-0">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6 tracking-wide">
              娛樂相聚
            </h3>
            <p className="text-foreground/70 leading-loose text-base md:text-lg">
              夜晚時分，行動 KTV 讓歡歌笑語迴盪在院落之間；電動麻將桌旁，牌局與情誼一同升溫。大螢幕投影機播放著 Netflix 精選，讓光影與海風交織成最難忘的島嶼夜晚。
            </p>
          </div>
        </div>

        {/* Block 2: 海島起居 - Text Left, Image Right (row-reverse) */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-32 md:mb-40">
          {/* Photo Placeholder - Right */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] bg-muted flex items-center justify-center">
            <span className="text-foreground/30 text-sm tracking-wider">照片預留位</span>
          </div>
          
          {/* Text - Left */}
          <div className="w-full md:w-1/2 px-6 md:px-16 py-12 md:py-0">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6 tracking-wide">
              海島起居
            </h3>
            <p className="text-foreground/70 leading-loose text-base md:text-lg">
              專屬廚房配備齊全，讓您親手烹調海島鮮味；戶外烤肉區在星空下飄散陣陣香氣。大容量冰箱冰鎮著午後的沁涼，洗衣機則讓長住旅人無後顧之憂——這裡不只是民宿，更是您在小琉球的第二個家。
            </p>
          </div>
        </div>

        {/* Block 3: 毛孩友善 - Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Photo Placeholder - Left */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] bg-muted flex items-center justify-center">
            <span className="text-foreground/30 text-sm tracking-wider">照片預留位</span>
          </div>
          
          {/* Text - Right */}
          <div className="w-full md:w-1/2 px-6 md:px-16 py-12 md:py-0">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6 tracking-wide">
              毛孩友善
            </h3>
            <p className="text-foreground/70 leading-loose text-base md:text-lg">
              我們深知毛孩是家人，因此敞開大門歡迎牠們一同入住。寬敞的庭院是牠們奔跑嬉戲的天堂，而您只需遵守基本的清潔禮儀，便能與摯愛的毛小孩共享這趟海島假期。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
