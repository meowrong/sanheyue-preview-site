import { CalendarDays, MessageCircle, CreditCard } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: CalendarDays,
    title: "查看日曆",
    description: "請先查看日曆確認理想日期"
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "聯繫管家",
    description: "點擊右下角按鈕加入「LINE 專屬管家」"
  },
  {
    number: "03",
    icon: CreditCard,
    title: "預付訂金",
    description: "由專人為您保留檔期，並請於 2 日內預付 40% 訂金"
  },
]

export function BookingSection() {
  return (
    <section id="booking" className="py-24 md:py-32 lg:py-40 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-6">
            預約流程
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8 text-balance">
            開啟您的海島假期
          </h2>
          <p className="text-muted-foreground text-lg">
            空房狀況請參考下方日曆
          </p>
        </div>

        {/* Calendar Placeholder */}
        <div 
          id="timetree-calendar"
          className="w-full min-h-[400px] bg-card border border-border flex items-center justify-center mb-16"
        >
          <div className="text-center text-muted-foreground">
            <CalendarDays className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>TimeTree 日曆嵌入區域</p>
            <p className="text-sm mt-2">請在此嵌入您的 TimeTree 日曆</p>
          </div>
        </div>

        {/* Booking Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary text-primary mb-6">
                <step.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div className="text-xs tracking-[0.3em] text-muted-foreground mb-3">
                STEP {step.number}
              </div>
              <h3 className="text-xl font-medium mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
