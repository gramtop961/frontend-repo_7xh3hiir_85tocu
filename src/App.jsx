import React from 'react'
import Hero from './components/Hero'
import WhatsInside from './components/WhatsInside'
import Pricing from './components/Pricing'
import WhyLove from './components/WhyLove'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  const handleAlohomora = () => {
    const section = document.getElementById('inside')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0b0a0f] text-amber-100">
      <Hero onAlohomora={handleAlohomora} />

      <div id="inside">
        <WhatsInside />
      </div>

      <Pricing />
      <WhyLove />
      <section className="bg-[#0b0a0f] py-12 text-amber-100">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-center text-2xl font-bold">Delivery by Owl Post</h3>
          <ul className="mx-auto mt-4 max-w-2xl space-y-2 text-amber-200/90">
            <li>🦉 Dispatch in 2–3 days</li>
            <li>📜 Comes with a free “Muggle-Proof Guide” bookmark</li>
            <li>🎁 Gift-wrap available in Hogwarts wrapping paper</li>
          </ul>
        </div>
      </section>
      <Reviews />
      <Footer />

      {/* Magical cursor trail */}
      <style>{`
        html, body { cursor: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"6\" cy=\"6\" r=\"3\" fill=\"%23ffd166\"/></svg>') 6 6, auto }
      `}</style>
    </div>
  )
}

export default App
