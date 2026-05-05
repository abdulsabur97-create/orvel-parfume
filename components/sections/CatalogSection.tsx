"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

const premiumPerfumes = [
  { id: 1,  name: "Clive Christian Blonde Amber",  tag: "Woody · Amber",     img: "/images/clive-christian-blonde-amber.jpg" },
  { id: 2,  name: "Creed Aventus",                 tag: "Fruity · Woody",    img: "/images/creed-aventus.jpg" },
  { id: 3,  name: "Creed Aventus Absolut 2023",    tag: "Fruity · Woody",    img: "/images/creed-aventus-absolut.jpg" },
  { id: 4,  name: "Roja Isola Blue",               tag: "Aquatic · Floral",  img: "/images/roja-isola-blue.jpg" },
  { id: 5,  name: "Roja Burlington",               tag: "Oriental · Woody",  img: "/images/roja-burlington.jpg" },
  { id: 6,  name: "Bvlgari Tiger",                 tag: "Citrus · Woody",    img: "/images/bvlgari-tygar.jpg" },
  { id: 7,  name: "Kilian Black Phantom",          tag: "Sweet · Rum",       img: "/images/kilian-black-phantom.jpg" },
  { id: 8,  name: "Louis Vuitton Imagination",     tag: "Citrus · Amber",    img: "/images/lv-imagination.jpg" },
  { id: 9,  name: "Louis Vuitton Symphony",        tag: "Floral · Musky",    img: "/images/lv-symphony.jpg" },
  { id: 10, name: "Parfums de Marly Sedley",       tag: "Aquatic · Fresh",   img: "/images/marly-sedley.jpg" },
  { id: 11, name: "Roja Elysium",                  tag: "Citrus · Woody",    img: "/images/roja-elysium.jpg" },
  { id: 12, name: "Mancera Amber Feel",            tag: "Amber · Oriental",  img: "/images/mancera-amberful.jpg" },
  { id: 13, name: "Mancera Cedrat Boise",          tag: "Citrus · Woody",    img: "/images/mancera-cedrat-boise.jpg" },
]

const budgetPerfumes = [
  { id: 1,  name: "Chanel Allure Sport",           tag: "Fresh · Citrus",    img: "/images/chanel-allure-sport.jpg" },
  { id: 2,  name: "Chanel Fresh",                  tag: "Aquatic · Light",   img: "/images/chanel-chance-fraiche.jpg" },
  { id: 3,  name: "Lanvin Modern Princess",        tag: "Floral · Musky",    img: "/images/lanvin-modern-princess.jpg" },
  { id: 4,  name: "Victoria's Secret Aqua Kiss",   tag: "Aquatic · Fruity",  img: "/images/victoria-aqua-kiss.jpg" },
  { id: 5,  name: "Antonio Banderas Blue Seduction", tag: "Woody · Fresh",   img: "/images/antonio-blue-seduction.jpg" },
  { id: 6,  name: "Dior Sauvage",                  tag: "Fresh · Spicy",     img: "/images/dior-sauvage.jpg" },
  { id: 7,  name: "Kajal Almaz",                   tag: "Oriental · Floral", img: "/images/kajal-almaz.jpg" },
  { id: 8,  name: "Versace Eros",                  tag: "Fresh · Woody",     img: "/images/versace-eros.jpg" },
  { id: 9,  name: "Dior Blooming Bouquet",         tag: "Floral · Powdery",  img: "/images/dior-blooming-bouquet.jpg" },
  { id: 10, name: "Mexx Fly",                      tag: "Fresh · Citrus",    img: "/images/mexx-fly.jpg" },
]

function PerfumeCard({ name, tag, img, index }: { name: string; tag: string; img: string; index: number }) {
  return (
    <div className="group relative bg-black border border-white/[0.06] hover:border-green-400/40 transition-all duration-300 overflow-hidden">
      {/* Image area */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
        {/* Green glow on hover */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_60%,rgba(74,222,128,0.08),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        <Image
          src={img}
          alt={name}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />

        {/* Index */}
        <div className="absolute top-3 left-3 font-montserrat text-[9px] text-white/20 tracking-widest z-20">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Hover CTA */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4 flex justify-center z-20">
          <button className="flex items-center gap-2 font-montserrat text-[9px] tracking-[0.4em] text-green-400 uppercase">
            <ShoppingBag className="w-3 h-3" />
            Заказать
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1 border-t border-white/[0.05] group-hover:border-green-400/15 transition-colors duration-300">
        <h4 className="font-bebas text-lg tracking-wider text-white leading-tight">{name}</h4>
        <span className="font-montserrat text-[9px] text-green-400/55 tracking-[0.25em] uppercase">{tag}</span>
      </div>
    </div>
  )
}

export function CatalogSection() {
  const [activeTab, setActiveTab] = useState<"premium" | "budget">("premium")
  const list = activeTab === "premium" ? premiumPerfumes : budgetPerfumes

  return (
    <section className="relative bg-black py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/15 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_50%,rgba(74,222,128,0.03),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-14">
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-green-400" />
            <span className="font-montserrat text-[10px] tracking-[0.55em] text-green-400 uppercase">
              Наш Каталог
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-bebas text-5xl sm:text-7xl tracking-wide text-white leading-none">
              Выберите свой{" "}
              <span className="text-lime-300">аромат</span>
            </h2>

            <div className="flex border border-white/10 font-montserrat text-[10px] tracking-[0.35em] uppercase">
              <button
                onClick={() => setActiveTab("premium")}
                className={`px-6 py-3 transition-all duration-200 border-r ${
                  activeTab === "premium"
                    ? "bg-green-400/12 text-green-400 border-green-400/25"
                    : "text-white/35 border-white/10 hover:text-white/60"
                }`}
              >
                Premium
              </button>
              <button
                onClick={() => setActiveTab("budget")}
                className={`px-6 py-3 transition-all duration-200 ${
                  activeTab === "budget"
                    ? "bg-green-400/12 text-green-400"
                    : "text-white/35 hover:text-white/60"
                }`}
              >
                Popular
              </button>
            </div>
          </div>

          <p className="font-montserrat text-white/28 text-xs tracking-wide max-w-lg leading-relaxed">
            {activeTab === "premium"
              ? "Эксклюзивные ароматы высшего сегмента — оригиналы на разлив и масла высшего качества."
              : "Часто запрашиваемые ароматы — отличный выбор для тех, кто ценит качество по доступной цене."}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px">
          {list.map((p, i) => (
            <PerfumeCard key={p.id} name={p.name} tag={p.tag} img={p.img} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
          <p className="font-montserrat text-white/28 text-[11px] tracking-wide">
            Все ароматы доступны на разлив · Масла высшего качества · Оригиналы
          </p>
          <button className="font-montserrat text-[10px] tracking-[0.45em] text-green-400/60 uppercase hover:text-green-400 transition-colors duration-200">
            Связаться для заказа →
          </button>
        </div>
      </div>
    </section>
  )
}
