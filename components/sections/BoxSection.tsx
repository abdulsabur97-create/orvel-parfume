"use client"

import { Gift, Film, Zap, Star } from "lucide-react"

const features = [
  {
    icon: Gift,
    title: "Персонализация",
    desc: "Упаковка создаётся под конкретного человека — любимые фильмы, сериалы, футбольные команды или значимые события жизни.",
  },
  {
    icon: Film,
    title: "Эффект воспоминаний",
    desc: "Аромат — мощнейший триггер памяти. Каждый раз, когда человек почувствует этот запах, он снова переживёт этот момент.",
  },
  {
    icon: Zap,
    title: "Многоэтапная распаковка",
    desc: "Мы выстраиваем настоящий эмоциональный ритуал — каждый элемент бокса раскрывается последовательно, нагнетая восторг.",
  },
  {
    icon: Star,
    title: "Luxury Experience",
    desc: "Это не подарок — это переживание. Премиальный парфюм + персонализированный бокс = незабываемое впечатление.",
  },
]

export function BoxSection() {
  return (
    <section className="relative bg-black py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_50%,rgba(74,222,128,0.04),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-20">
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-green-400" />
            <span className="font-montserrat text-[10px] tracking-[0.55em] text-green-400 uppercase">
              The Orvel Box
            </span>
          </div>
          <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl text-white leading-none tracking-wide max-w-2xl">
            Подарок,{" "}
            <span className="text-lime-300">который помнят</span>
            {" "}всю жизнь.
          </h2>
          <p className="font-montserrat text-white/40 text-sm max-w-xl leading-relaxed tracking-wide mt-2">
            Orvel Box — это не просто красивая упаковка. Это философия подарка:
            каждый бокс рассказывает историю именно того человека, которому он предназначен.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-black p-8 flex flex-col gap-5 hover:bg-white/[0.025] transition-colors duration-300"
            >
              <div className="w-10 h-10 border border-green-400/25 flex items-center justify-center group-hover:border-green-400/60 transition-colors duration-300">
                <Icon className="w-4 h-4 text-green-400" strokeWidth={1.5} />
              </div>
              <h3 className="font-bebas text-xl tracking-widest text-white">
                {title}
              </h3>
              <p className="font-montserrat text-white/40 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-px bg-white/[0.015] border-t border-white/5 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-montserrat text-white/50 text-sm tracking-wide">
            Хотите создать персональный бокс для вашего близкого?
          </p>
          <button className="font-montserrat border border-green-400/50 text-green-400 px-8 py-3 text-[11px] tracking-[0.45em] uppercase hover:bg-green-400/10 transition-all duration-300 whitespace-nowrap">
            Заказать Бокс
          </button>
        </div>
      </div>
    </section>
  )
}
