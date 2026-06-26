import { Clock, Leaf, Volume2 } from "lucide-react"

const rules = [
  {
    icon: Clock,
    title: "入住 / 退房時間",
    description: "入住時間 15:00，退房時間 11:00"
  },
  {
    icon: Leaf,
    title: "綠色環保",
    description: "不主動提供一次性盥洗用品，如牙刷、刮鬍刀、浴帽等"
  },
  {
    icon: Volume2,
    title: "享受靜謐",
    description: "每晚 22:00 後請降低音量，全面禁止室內吸菸與施放煙火"
  },
]

export function RulesSection() {
  return (
    <section id="rules" className="py-24 md:py-32 lg:py-40 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-6">
            住宿約定
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-balance">
            讓美好延續
          </h2>
        </div>

        <div className="space-y-6">
          {rules.map((rule) => (
            <div 
              key={rule.title}
              className="flex gap-6 p-6 md:p-8 bg-card border border-border/60"
            >
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-primary">
                <rule.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">{rule.title}</h3>
                <p className="text-muted-foreground">{rule.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
