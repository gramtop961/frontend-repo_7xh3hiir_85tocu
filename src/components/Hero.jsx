import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = ({ onAlohomora }) => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#0d0b10] text-amber-100">
      {/* Floating sparkles overlay */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.2 }}
          style={{
            background:
              'radial-gradient(1200px 600px at 20% 10%, rgba(255,215,128,0.15), transparent 60%), radial-gradient(1000px 600px at 80% 0%, rgba(168,127,255,0.12), transparent 60%)',
          }}
        />
      </div>

      {/* Background parchment texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 4px)',
        }}
      />

      {/* Castle silhouette */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.6), transparent), url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop) center/cover no-repeat',
          }}
        />
      </div>

      {/* Spline 3D Hero Object */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/lsFGaFqoD7t-tmSb/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center sm:pt-28">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm tracking-widest text-amber-300/80">✨ Limited Edition | Handmade | Premium Wizarding Finish</p>
          <h1 className="bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-4xl font-black text-transparent sm:text-6xl">
            Prepare for a Magical 2026
          </h1>
          <p className="mt-4 text-amber-100/90">
            The Official Harry Potter™ Desk & Planner Set — a spellbinding collection for witches, wizards, and organized Muggles alike.
          </p>
          <p className="mt-1 text-amber-300/80">🦉 Delivered by Owl Post (or standard shipping, if your owl is busy)</p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,200,100,0.6)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onAlohomora}
            className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 px-6 py-3 font-semibold text-[#201a11] shadow-[0_0_20px_rgba(255,200,120,0.35)]"
          >
            <span className="relative z-10">Alohomora — Unlock the Collection</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
