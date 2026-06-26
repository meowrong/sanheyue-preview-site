const rooms = [
  {
    name: "聆雨雙人房",
    capacity: "2 人入住",
    description: "以雨聲與靜謐感為靈感，適合想保留一點獨處餘裕的旅人。",
  },
  {
    name: "晨曦四人房",
    capacity: "4 人入住",
    description: "明亮、舒展，適合家庭或好友一起迎接小琉球清晨的光。",
  },
  {
    name: "望玥雙人房",
    capacity: "2 人入住",
    description: "以月色意象命名，保留柔和安定的休息氛圍。",
  },
  {
    name: "聽風四人房",
    capacity: "4 人入住",
    description: "讓風聲與島嶼氣息陪伴入眠，適合親友共享的自在房型。",
  },
]

export function RoomsSection() {
  return (
    <section id="rooms" className="bg-secondary/50 py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center md:mb-20">
          <h2 className="mb-8 text-sm tracking-[0.3em] text-foreground/70 uppercase">
            客房資訊
          </h2>
          <div className="mx-auto h-px w-12 bg-primary" />
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-loose text-foreground/65 md:text-base">
            四間房型以自然意象命名，延續彡禾悅安靜、文雅的品牌調性。包棟入住時，能依照家庭與好友的需求自在分配空間。
          </p>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-2">
          {rooms.map((room) => (
            <article key={room.name} className="bg-card p-8 md:p-10">
              <p className="mb-4 text-xs tracking-[0.25em] text-primary">
                {room.capacity}
              </p>
              <h3 className="mb-5 text-2xl font-normal tracking-[0.12em] text-foreground">
                {room.name}
              </h3>
              <p className="text-sm leading-loose text-foreground/65">
                {room.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
