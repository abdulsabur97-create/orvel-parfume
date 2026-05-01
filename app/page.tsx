"use client"

import { useState } from "react"
import { IntroSection } from "@/components/sections/IntroSection"
import { HeroSection } from "@/components/sections/HeroSection"
import { VSLSection } from "@/components/sections/VSLSection"
import { BoxSection } from "@/components/sections/BoxSection"
import { CatalogSection } from "@/components/sections/CatalogSection"
import { FooterSection } from "@/components/sections/FooterSection"

export default function Home() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <main className="bg-black min-h-screen">
      {!introDone && <IntroSection onDone={() => setIntroDone(true)} />}
      <HeroSection />
      <VSLSection />
      <BoxSection />
      <CatalogSection />
      <FooterSection />
    </main>
  )
}
