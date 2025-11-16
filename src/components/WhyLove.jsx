import React from 'react'
import { motion } from 'framer-motion'

const WhyLove = () => {
  const items = [
    'Authentic Harry Potter™ aesthetic',
    'Dark magical palette perfect for desk styling',
    'High-quality textured paper',
    'Hidden magical details on every product',
    'Designed for collectors & creators',
  ]

  return (
    <section className="relative bg-[#0b0a0f] py-16 text-amber-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Why you’ll love it</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-amber-500/20 bg-[#141016]/70 p-5 backdrop-blur"
            >
              ✨ {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyLove
