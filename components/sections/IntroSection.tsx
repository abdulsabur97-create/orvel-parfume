"use client"

import { useEffect, useRef, useState } from "react"

interface Vector2D { x: number; y: number }

class Particle {
  pos: Vector2D = { x: 0, y: 0 }
  vel: Vector2D = { x: 0, y: 0 }
  acc: Vector2D = { x: 0, y: 0 }
  target: Vector2D = { x: 0, y: 0 }
  closeEnoughTarget = 80
  maxSpeed = 3.5
  maxForce = 0.18
  particleSize = 3
  isKilled = false
  startColor = { r: 0, g: 0, b: 0 }
  targetColor = { r: 255, g: 255, b: 255 }
  colorWeight = 0
  colorBlendRate = 0.018

  move() {
    let proximityMult = 1
    const dx = this.pos.x - this.target.x
    const dy = this.pos.y - this.target.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    if (distance < this.closeEnoughTarget) proximityMult = distance / this.closeEnoughTarget

    const toX = this.target.x - this.pos.x
    const toY = this.target.y - this.pos.y
    const mag = Math.sqrt(toX * toX + toY * toY)
    const nx = mag > 0 ? (toX / mag) * this.maxSpeed * proximityMult : 0
    const ny = mag > 0 ? (toY / mag) * this.maxSpeed * proximityMult : 0

    const sx = nx - this.vel.x
    const sy = ny - this.vel.y
    const sm = Math.sqrt(sx * sx + sy * sy)
    this.acc.x += sm > 0 ? (sx / sm) * this.maxForce : 0
    this.acc.y += sm > 0 ? (sy / sm) * this.maxForce : 0

    this.vel.x += this.acc.x
    this.vel.y += this.acc.y
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
    this.acc.x = 0
    this.acc.y = 0
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.colorWeight < 1.0) this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0)
    const r = Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight)
    const g = Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight)
    const b = Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight)
    ctx.fillStyle = `rgb(${r},${g},${b})`
    ctx.fillRect(this.pos.x, this.pos.y, 2, 2)
  }

  kill(width: number, height: number) {
    if (!this.isKilled) {
      const angle = Math.random() * Math.PI * 2
      const dist = (width + height) / 2
      this.target.x = width / 2 + Math.cos(angle) * dist
      this.target.y = height / 2 + Math.sin(angle) * dist
      this.startColor = {
        r: Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight),
        g: Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight),
        b: Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight),
      }
      this.targetColor = { r: 0, g: 0, b: 0 }
      this.colorWeight = 0
      this.isKilled = true
    }
  }
}

function spawnParticles(
  text: string,
  canvas: HTMLCanvasElement,
  particles: Particle[],
  color: { r: number; g: number; b: number },
  pixelSteps: number,
  generateRandomPos: (x: number, y: number, mag: number) => Vector2D
) {
  const off = document.createElement("canvas")
  off.width = canvas.width
  off.height = canvas.height
  const octx = off.getContext("2d")!

  // Draw two lines: brand name split
  const lines = text.split("\n")
  const lineH = canvas.height * 0.28
  const fontSize = Math.min(canvas.width * 0.22, canvas.height * 0.38)

  octx.fillStyle = "white"
  octx.font = `${fontSize}px BebasNeue, sans-serif`
  octx.textAlign = "center"
  octx.textBaseline = "middle"

  if (lines.length === 1) {
    octx.fillText(lines[0], canvas.width / 2, canvas.height / 2)
  } else {
    lines.forEach((line, i) => {
      octx.fillText(line, canvas.width / 2, canvas.height / 2 + (i - (lines.length - 1) / 2) * lineH)
    })
  }

  const { data } = octx.getImageData(0, 0, canvas.width, canvas.height)
  let particleIndex = 0
  const coords: number[] = []
  for (let i = 0; i < data.length; i += pixelSteps * 4) coords.push(i)

  // Shuffle for fluid motion
  for (let i = coords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [coords[i], coords[j]] = [coords[j], coords[i]]
  }

  for (const idx of coords) {
    if (data[idx + 3] > 0) {
      const x = (idx / 4) % canvas.width
      const y = Math.floor(idx / 4 / canvas.width)
      let p: Particle

      if (particleIndex < particles.length) {
        p = particles[particleIndex]
        p.isKilled = false
        particleIndex++
      } else {
        p = new Particle()
        const rp = generateRandomPos(canvas.width / 2, canvas.height / 2, (canvas.width + canvas.height) / 2)
        p.pos.x = rp.x
        p.pos.y = rp.y
        p.maxSpeed = Math.random() * 5 + 3
        p.maxForce = p.maxSpeed * 0.06
        p.colorBlendRate = Math.random() * 0.02 + 0.008
        particles.push(p)
      }

      p.startColor = {
        r: Math.round(p.startColor.r + (p.targetColor.r - p.startColor.r) * p.colorWeight),
        g: Math.round(p.startColor.g + (p.targetColor.g - p.startColor.g) * p.colorWeight),
        b: Math.round(p.startColor.b + (p.targetColor.b - p.startColor.b) * p.colorWeight),
      }
      p.targetColor = color
      p.colorWeight = 0
      p.target.x = x
      p.target.y = y
    }
  }

  for (let i = particleIndex; i < particles.length; i++) particles[i].kill(canvas.width, canvas.height)
}

export function IntroSection({ onDone }: { onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)
  const [opacity, setOpacity] = useState(1)
  const doneRef = useRef(false)

  const generateRandomPos = (x: number, y: number, mag: number): Vector2D => {
    const angle = Math.random() * Math.PI * 2
    return { x: x + Math.cos(angle) * mag, y: y + Math.sin(angle) * mag }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      // Use document width as fallback when innerWidth is unreliable (e.g. narrow iframes)
      canvas.width = Math.max(window.innerWidth, document.documentElement.clientWidth, 800)
      canvas.height = Math.max(window.innerHeight, document.documentElement.clientHeight, 500)
    }
    resize()

    const greenPalette = [
      { r: 163, g: 230, b: 53 },
      { r: 132, g: 204, b: 22 },
      { r: 217, g: 249, b: 157 },
      { r: 74, g: 222, b: 128 },
      { r: 255, g: 255, b: 255 },
    ]

    const PHASES = [
      { text: "ORVEL\nPARFUME", color: { r: 255, g: 255, b: 255 } },
      { text: "ORVEL\nPARFUME", color: greenPalette[0] },
      { text: "ORVEL\nPARFUME", color: greenPalette[2] },
    ]

    let phase = 0
    let frame = 0
    const HOLD = 110  // frames to hold each phase
    const TOTAL_DURATION = HOLD * PHASES.length + 60

    spawnParticles(PHASES[0].text, canvas, particlesRef.current, PHASES[0].color, 4, generateRandomPos)

    const animate = () => {
      const ctx = canvas.getContext("2d")!
      ctx.fillStyle = "rgba(0,0,0,0.13)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.move()
        p.draw(ctx)
        if (p.isKilled && (p.pos.x < -50 || p.pos.x > canvas.width + 50 || p.pos.y < -50 || p.pos.y > canvas.height + 50)) {
          particles.splice(i, 1)
        }
      }

      frame++

      // Cycle through color phases
      if (frame % HOLD === 0 && phase < PHASES.length - 1) {
        phase++
        spawnParticles(PHASES[phase].text, canvas, particles, PHASES[phase].color, 4, generateRandomPos)
      }

      // Start fade-out
      if (frame === TOTAL_DURATION && !doneRef.current) {
        doneRef.current = true
        // Kill all particles outward
        particles.forEach(p => p.kill(canvas.width, canvas.height))
        setOpacity(0)
        setTimeout(onDone, 900)
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    animate()
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black"
      style={{ opacity, transition: opacity === 0 ? "opacity 0.85s ease" : "none", pointerEvents: opacity === 0 ? "none" : "all" }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  )
}
