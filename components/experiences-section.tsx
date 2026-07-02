import { 
  Ship, 
  Bike, 
  Waves, 
  Moon, 
  Fish,
  Flame,
  Sailboat,
  Eye,
  Car
} from "lucide-react"

const experiences = [
  { icon: Ship, name: "船票來回", price: "大人 400 / 小孩 250" },
  { icon: Bike, name: "機車租賃", price: "350/台/24hr" },
  { icon: Waves, name: "潮間帶導覽", price: "100/人" },
  { icon: Moon, name: "夜遊導覽", price: "100/人" },
  { icon: Fish, name: "浮潛體驗", price: "400/人" },
  { icon: Flame, name: "烤肉吃到飽", price: "大人 400 / 小孩 250" },
  { icon: Sailboat, name: "獨木舟", price: "550/人" },
  { icon: Sailboat, name: "立槳 SUP", price: "900/人" },
  { icon: Eye, name: "玻璃船", price: "大人 330 / 小孩 250" },
  { icon: Fish, name: "深潛體驗", price: "2200/一對一" },
  { icon: Car, name: "卡丁車", price: "單人 270 / 雙人 320" },
]

export function ExperiencesSection() {
  return (
    <section id="experiences" className="py-24 md:py-32 lg:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-6">
            專屬海島體驗
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8 text-balance">
            全方位代訂服務
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            為了讓旅程更純粹，我們提供全方位的代訂服務。從來回船票、機車租賃，到潮間帶導覽、浮潛體驗，甚至是專屬的烤肉饗宴，皆可為您妥善安排。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group flex items-center gap-4 p-4 md:p-5 border border-border bg-card hover:border-primary/40 hover:bg-secondary/70 transition-all duration-300"
            >
              <exp.icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
              <div className="min-w-0">
                <p className="font-medium text-sm">{exp.name}</p>
                <p className="text-xs text-muted-foreground truncate">{exp.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
