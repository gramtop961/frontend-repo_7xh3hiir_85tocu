import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Card = ({ index, title, children, hint }) => {
  const [revealed, setRevealed] = useState(false)
  return (
    <motion.div
      className="relative rounded-xl border border-amber-500/20 bg-[#141016]/70 p-5 text-amber-100 backdrop-blur-md"
      whileHover={{ boxShadow: '0 0 30px rgba(255,200,100,0.15)' }}
      onClick={() => setRevealed((r) => !r)}
    >
      <div className="mb-2 text-sm text-amber-300/70">{index}. {title}</div>
      <div className="prose prose-invert max-w-none text-amber-100/90">
        {children}
      </div>
      <div className="mt-3 text-xs text-amber-300/60">{hint}</div>

      {/* Tap to reveal spell overlay */}
      <AnimatePresence>
        {!revealed && (
          <motion.div
            key="veil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-[#2a1f14]/40 to-[#0b0a0f]/40"
          >
            <div className="absolute inset-0 grid place-items-center">
              <motion.span
                initial={{ y: 6 }}
                animate={{ y: 0 }}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.6 }}
                className="rounded-full border border-amber-400/30 bg-black/30 px-3 py-1 text-xs text-amber-200 shadow-[0_0_14px_rgba(255,200,120,0.25)]"
              >
                Tap to reveal spell ✨
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const WhatsInside = () => {
  return (
    <section className="relative bg-[#0b0a0f] py-20 text-amber-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">What’s inside the 2026 Wizarding Planner Set?</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-amber-300/80">
          Point your wand at each card to reveal a secret element.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card index={1} title="Hogwarts Desk Calendar (Landscape)" hint="Hover to reveal Patronus flourishes and hidden footprints.">
            <ul className="list-disc pl-5">
              <li>Dark-themed Marauder’s Map backgrounds</li>
              <li>Hogwarts Castle silhouettes</li>
              <li>Night sky + Patronus flourishes</li>
              <li>Monthly magical quotes</li>
              <li>Easter eggs in illustrations</li>
            </ul>
          </Card>

          <Card index={2} title="Notebooks (Spellbook Style)" hint="Tap to reveal the head of house signature.">
            <p>Available in Gryffindor Red, Ravenclaw Blue, Slytherin Emerald, and Hufflepuff Honey Gold with faux-aged parchment pages + crest embossing.</p>
          </Card>

          <Card index={3} title="Tear-Off Daily Sheets — Ministry of Magic Format" hint="Edges glow like lit parchment on hover.">
            <ul className="list-disc pl-5">
              <li>Daily tasks + Time-turner hourly schedule</li>
              <li>Mood meter with magical creatures</li>
              <li>Priority sorting by charms, transfiguration, potions, divination</li>
            </ul>
          </Card>

          <Card index={4} title="Sticky Note Set – Owl Post Edition" hint="Click for a tiny sparkle like Nox fading.">
            <p>Shapes include Hogwarts envelope, Hedwig silhouette, wand-tip star, and potion bottle.</p>
          </Card>

          <Card index={5} title="Pocket Planner — Marauder’s Map Edition" hint="Footprints appear as you flip through.">
            <p>“I solemnly swear I’m up to getting organized.” Months hidden behind reveal-ink panels.</p>
          </Card>

          <Card index={6} title="Bundle Name" hint="Alohomora your productivity.">
            <p className="font-semibold">The Harry Potter™ 2026 Magical Productivity Set</p>
          </Card>
        </div>
      </div>

      {/* Marauder’s footprints guiding the scroll */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto mb-[-12px] h-6 w-40 opacity-60" aria-hidden>
        <div className="h-full bg-[radial-gradient(circle_at_8px_8px,rgba(245,197,123,0.4)_2px,transparent_3px)] bg-[length:16px_16px]" />
      </div>
    </section>
  )
}

export default WhatsInside
