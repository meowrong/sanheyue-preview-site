import { Phone, MapPin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-background">
      {/* Map Section */}
      <div className="relative h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14731.936144937!2d120.36!3d22.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e18b06a3b1347%3A0x21e5e5c5b5b5b5b5!2z5bCP55CJ55CD!5e0!3m2!1szh-TW!2stw!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="彡禾悅位置"
          className="grayscale"
        />
        
        {/* Contact Info Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[400px] bg-card/95 p-10 md:p-14 flex flex-col justify-center">
          <p className="text-sm text-foreground/70 leading-relaxed mb-6">
            彡禾悅位於小琉球，<br />
            這座美麗的珊瑚礁島嶼<br />
            是您逃離塵囂的完美選擇。
          </p>
          
          <div className="w-8 h-px bg-foreground/30 my-6" />
          
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-foreground/50" strokeWidth={1.5} />
              <a href="tel:0919172702" className="text-foreground/70 hover:text-foreground transition-colors">
                0919-172-702
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-foreground/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <span className="text-foreground/70">屏東縣琉球鄉（小琉球）</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-foreground/50" strokeWidth={1.5} />
              <a href="mailto:contact@sanheyue.com" className="text-foreground/70 hover:text-foreground transition-colors">
                contact@sanheyue.com
              </a>
            </div>
          </div>
          
          <div className="w-8 h-px bg-foreground/30 my-6" />
          
          <div className="flex flex-col gap-3 text-sm">
            <a 
              href="https://www.instagram.com/shanheyue.inn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              Follow us on Instagram
            </a>
            <a 
              href="https://maps.app.goo.gl/tagLzZu646FLm7pb6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-8 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/50 tracking-wider">
          <p>&copy; {new Date().getFullYear()} 彡禾悅 包棟民宿</p>
          <nav className="flex gap-8">
            <a href="#home" className="hover:text-foreground transition-colors">首頁</a>
            <a href="#about" className="hover:text-foreground transition-colors">關於民宿</a>
            <a href="#amenities" className="hover:text-foreground transition-colors">空間設備</a>
            <a href="#contact" className="hover:text-foreground transition-colors">聯繫我們</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
