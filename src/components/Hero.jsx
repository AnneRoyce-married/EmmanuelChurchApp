import React from 'react'

export default function Hero(){
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 flex items-center gap-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold">Welcome to Immanuel Church</h1>
          <p className="mt-4 text-lg text-opacity-90">Join us for worship, community, and spiritual growth. We welcome everyone.</p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="px-4 py-2 rounded-md bg-gold text-primary font-semibold">Plan a Visit</a>
            <a href="/blog" className="px-4 py-2 rounded-md border border-white/30">Read our Blog</a>
          </div>
        </div>
        <div className="hidden md:block flex-1">
          <div className="w-full h-56 rounded-xl bg-white/10" />
        </div>
      </div>
    </section>
  )
}
