"use client"

import { Play } from "lucide-react"

export function VSLSection() {
  return (
    <section className="relative bg-black py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-green-400/4 rounded-full blur-3xl" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-lime-300/4 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-14">
          <div className="w-10 h-px bg-green-400" />
          <span className="font-montserrat text-[10px] tracking-[0.55em] text-green-400 uppercase">
            The Experience
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div className="flex flex-col gap-8">
            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-tight tracking-wide">
              Это не просто{" "}
              <span className="text-lime-300">парфюм</span>.
              <br />
              Это переживание.
            </h2>

            <p className="font-montserrat text-white/50 text-sm leading-relaxed tracking-wide">
              Каждый бокс Orvel — это многоступенчатый ритуал. Мы создаём
              персонализированные подарочные боксы, вызывающие сильные эмоции
              и заставляющие переживать самые ценные воспоминания снова.
            </p>

            <ul className="flex flex-col gap-3">
              {[
                "Персонализация под любимые фильмы, сериалы и события",
                "Аромат как триггер памяти — неповторимый опыт",
                "Многоэтапная эмоциональная распаковка",
                "Премиальный luxury experience в каждой детали",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/55 text-sm font-montserrat">
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-lime-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="group flex items-center gap-3 w-fit border border-green-400/40 text-green-400 px-7 py-3 font-montserrat text-[11px] tracking-[0.4em] uppercase hover:bg-green-400/10 transition-all duration-300">
              <Play className="w-3 h-3 fill-current" />
              Смотреть видео
            </button>
          </div>

          {/* Right — video placeholder */}
          <div className="relative aspect-video bg-white/[0.025] border border-white/8 overflow-hidden group cursor-pointer">
            {/* Corner marks */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-green-400/50" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-green-400/50" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-green-400/50" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-green-400/50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(74,222,128,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <div className="w-16 h-16 rounded-full border border-green-400/50 flex items-center justify-center group-hover:bg-green-400/10 group-hover:border-green-400 transition-all duration-300 group-hover:scale-110">
                <Play className="w-6 h-6 text-green-400 fill-current ml-0.5" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-montserrat text-white/35 text-[10px] tracking-[0.45em] uppercase">
                  Вставьте ваше VSL видео
                </span>
                <span className="font-bebas text-white/15 text-sm tracking-[0.3em] uppercase">
                  The Orvel Box Experience
                </span>
              </div>
            </div>

            {/* Scanlines */}
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{ backgroundImage: "repeating-linear-gradient(0deg,#000 0px,#000 1px,transparent 1px,transparent 4px)" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
