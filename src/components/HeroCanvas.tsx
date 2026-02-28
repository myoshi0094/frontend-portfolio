'use client'

import { useRef, useEffect } from 'react'

const PARTICLE_COUNT = 600

interface Particle {
  x: number; y: number   // 現在位置
  px: number; py: number // 直前位置（トレイル描画用）
  speed: number
  life: number
  maxLife: number
}

/**
 * サイン波の重ね合わせで流れ場の角度を生成。
 * Perlin noise の代わり。非整数比の周波数を使うことで
 * 繰り返しパターンが見えにくくなる。
 */
function fieldAngle(nx: number, ny: number, t: number): number {
  return (
    Math.sin(ny * Math.PI * 2.0 + t * 0.18) * 0.90
    + Math.cos(nx * Math.PI * 2.5 + t * 0.22) * 0.60
    + Math.sin((nx + ny) * Math.PI * 1.8 + t * 0.14) * 0.45
  )
}

function spawn(w: number, h: number): Particle {
  const maxLife = 100 + Math.random() * 150
  const x = Math.random() * w
  const y = Math.random() * h
  return { x, y, px: x, py: y, speed: 1.0 + Math.random() * 1.5, life: 0, maxLife }
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0

    const resize = () => {
      w = canvas.width  = canvas.offsetWidth  || window.innerWidth
      h = canvas.height = canvas.offsetHeight || window.innerHeight
      // 初期化：ページ背景色で塗りつぶしてトレイルの起点を作る
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, w, h)
    }
    resize()
    window.addEventListener('resize', resize)

    // パーティクルをランダム位相で初期化（一斉に動き出さないよう）
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
      const p = spawn(w, h)
      p.life = Math.random() * p.maxLife
      return p
    })

    let raf: number
    const t0 = performance.now()

    const draw = () => {
      const t = (performance.now() - t0) / 1000

      // 前フレームのトレイルを少しずつ消す（フェードアウト）
      // ページ背景 #0f0f0f に合わせた色で半透明塗りつぶし
      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)'
      ctx.fillRect(0, 0, w, h)

      // 全粒子を 1 本のパスで描画（stroke 呼び出しは 1 回 → 高速）
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(235, 235, 235, 0.38)'
      ctx.lineWidth = 0.85

      for (const p of particles) {
        const angle = fieldAngle(p.x / w, p.y / h, t)

        p.px = p.x
        p.py = p.y
        p.x += Math.cos(angle) * p.speed
        p.y += Math.sin(angle) * p.speed
        p.life++

        // 寿命切れ or 画面外 → 別の場所に再配置
        if (p.life > p.maxLife || p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
          const fresh = spawn(w, h)
          Object.assign(p, fresh)
          continue  // ジャンプ線を描かないよう skip
        }

        ctx.moveTo(p.px, p.py)
        ctx.lineTo(p.x, p.y)
      }

      ctx.stroke()
      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  )
}
