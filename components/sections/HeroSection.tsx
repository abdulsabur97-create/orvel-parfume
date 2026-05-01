export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(163,230,53,1) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(74,222,128,0.06),transparent)]" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 w-full text-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-px bg-green-400/50" />
          <span className="font-montserrat text-[10px] tracking-[0.55em] text-green-400/60 uppercase">
            Est. 2024
          </span>
          <div className="w-10 h-px bg-green-400/50" />
        </div>

        {/* Brand name — Bebas Neue */}
        <div className="flex flex-col items-center leading-none">
          <h1 className="font-bebas text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[10rem] tracking-[0.12em] text-white uppercase">
            Orvel
          </h1>
          <h2 className="font-bebas text-[10vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[5rem] tracking-[0.55em] text-lime-300 uppercase -mt-2">
            Parfume
          </h2>
        </div>

        {/* Tagline — Montserrat */}
        <p className="font-montserrat text-white/30 text-[10px] tracking-[0.45em] uppercase mt-1">
          Scent is Memory — Luxury Redefined
        </p>

        {/* Decorative line */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent mt-2" />

        {/* Scroll hint */}
        <div className="flex flex-col items-center gap-2 mt-16 animate-bounce">
          <span className="font-montserrat text-[9px] tracking-[0.55em] text-white/25 uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-green-400/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
