import React from 'react'

const reviews = [
  { text: 'Feels like opening a Hogwarts acceptance letter every day!', author: 'Padma' },
  { text: 'The Gringotts cart animation alone is worth it.', author: 'George Weasley' },
  { text: 'Perfect for planning mischief responsibly.', author: 'Lupin' },
]

const Reviews = () => {
  return (
    <section className="bg-[#0b0a0f] py-16 text-amber-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Reviews from the Wizarding World</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-xl border border-amber-500/20 bg-[#141016]/70 p-5 text-amber-100/90">
              <div className="text-xl">⭐ ⭐ ⭐ ⭐ ⭐</div>
              <p className="mt-2">“{r.text}”</p>
              <div className="mt-3 text-sm text-amber-300/70">— {r.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
