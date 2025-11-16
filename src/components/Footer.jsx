import React from 'react'

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0a0f] py-12 text-amber-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-3 md:grid-cols-5">
          <a className="hover:text-amber-100" href="#">About the Maker</a>
          <a className="hover:text-amber-100" href="#">Owl Post Support</a>
          <a className="hover:text-amber-100" href="#">Return via Floo Network</a>
          <a className="hover:text-amber-100" href="#">Ministry of Magic Policies</a>
          <a className="hover:text-amber-100" href="#">Muggle Shipping Info</a>
        </div>
      </div>

      {/* Footsteps loop */}
      <div className="pointer-events-none absolute inset-x-0 bottom-2 mx-auto h-6 w-56 opacity-70" aria-hidden>
        <div className="h-full animate-[walk_6s_linear_infinite] bg-[radial-gradient(circle_at_8px_8px,rgba(245,197,123,0.45)_2px,transparent_3px)] bg-[length:16px_16px]" />
      </div>

      <style>{`
        @keyframes walk { from { transform: translateX(-50%); } to { transform: translateX(50%); } }
      `}</style>
    </footer>
  )
}

export default Footer
