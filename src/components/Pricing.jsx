import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TreasureChest } from 'lucide-react'

const Pricing = () => {
  const [added, setAdded] = useState(false)

  return (
    <section className="relative bg-[#0b0a0f] py-20 text-amber-100">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Gringotts Vault</h2>
        <p className="mt-2 text-center text-amber-300/80">Vault 2026: Wizarding Bundle</p>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-amber-500/20 bg-[#141016]/70 p-6 backdrop-blur">
          <ul className="grid grid-cols-2 gap-3 text-sm text-amber-200/90 sm:grid-cols-3">
            <li>✔ Desk Calendar</li>
            <li>✔ Spellbook Notebook</li>
            <li>✔ Pocket Planner</li>
            <li>✔ Sticky Notes</li>
            <li>✔ Tear-Off Sheets</li>
            <li>✔ Owl Post Bookmark</li>
          </ul>

          <div className="mt-6 flex items-end justify-between">
            <div>
              <div className="text-4xl font-black tracking-tight">🪙 75 Galleons</div>
              <div className="text-xs text-amber-300/70">or ₹______</div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setAdded(true)}
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-400 px-5 py-3 font-semibold text-[#201a11]"
            >
              <TreasureChest className="h-5 w-5" />
              <span>Add to Cart — Gringotts Chest</span>
              <span className="absolute inset-0 rounded-xl ring-1 ring-amber-200/40 transition group-hover:ring-amber-100/70" />
            </motion.button>
          </div>

          <AnimatePresence>
            {added && (
              <motion.div
                key="treasure"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-6 flex items-center gap-3 rounded-lg border border-amber-400/20 bg-black/30 p-3 text-sm text-amber-100 shadow-[0_0_20px_rgba(255,200,120,0.25)]"
              >
                <span className="inline-block animate-bounce">✨</span>
                <span>The Gringotts chest clinks and glows as your item is added!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Pricing
