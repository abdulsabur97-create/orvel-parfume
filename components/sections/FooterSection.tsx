export function FooterSection() {
  return (
    <footer className="relative bg-black border-t border-white/5 px-6 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_50%_100%,rgba(74,222,128,0.04),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">
        <div className="grid sm:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-bebas text-3xl tracking-[0.2em] text-white uppercase">
                Orvel
              </h3>
              <p className="font-bebas text-base tracking-[0.5em] text-lime-300 uppercase">
                Parfume
              </p>
            </div>
            <p className="font-montserrat text-white/30 text-xs leading-relaxed tracking-wide">
              Scent is Memory — Luxury Redefined.
              <br />
              Персонализированные ароматы и подарочные боксы.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-montserrat text-[10px] tracking-[0.55em] text-green-400/65 uppercase">
              Разделы
            </h4>
            <ul className="flex flex-col gap-2">
              {["О нас", "Каталог", "Orvel Box", "Контакты"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-montserrat text-white/38 text-xs tracking-wide hover:text-white/75 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-montserrat text-[10px] tracking-[0.55em] text-green-400/65 uppercase">
              Контакты
            </h4>
            <ul className="flex flex-col gap-2">
              {["Instagram", "Telegram", "WhatsApp"].map((c) => (
                <li key={c} className="font-montserrat text-white/38 text-xs tracking-wide hover:text-white/75 transition-colors duration-200 cursor-pointer">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
          <p className="font-montserrat text-white/20 text-[10px] tracking-wide">
            © 2024 Orvel Parfume. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-4 h-px bg-green-400/35" />
            <span className="font-montserrat text-[9px] tracking-[0.5em] text-white/18 uppercase">
              Scent is Memory
            </span>
            <div className="w-4 h-px bg-green-400/35" />
          </div>
        </div>
      </div>
    </footer>
  )
}
