import React from 'react'
import Hero from '@/components/Hero'

export default function Home(){
  return (
    <main>
      <Hero />
      <section id="services" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold text-primary">Our Focus</h4>
            <p className="mt-2 text-gray-600">We exist to exalt Christ, faithfully teach the Bible, and to make disciples. Our worship, preaching, and ministries are Scripture-centered.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold text-primary">Service Times</h4>
            <p className="mt-2 text-gray-600">Sunday Worship: 10:30 AM • Prayer & Bible Study: Wednesday 7:30 PM</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold text-primary">Get Involved</h4>
            <p className="mt-2 text-gray-600">Join a home fellowship, serve in outreach, or attend a Bible study. We encourage every member to grow in Scripture.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-primary">Latest from the Word</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded shadow-sm">
            <h3 className="font-semibold">Walking in the Light</h3>
            <p className="text-sm text-gray-600 mt-2">A short reflection on 1 John 1:7 and living transparently before the Lord.</p>
            <div className="mt-3 text-xs text-gray-500">Nov 1, 2025</div>
          </div>
          <div className="p-4 bg-white rounded shadow-sm">
            <h3 className="font-semibold">The Sufficiency of Scripture</h3>
            <p className="text-sm text-gray-600 mt-2">Why the Bible alone is our authority for faith and practice (2 Timothy 3:16).</p>
            <div className="mt-3 text-xs text-gray-500">Oct 15, 2025</div>
          </div>
        </div>
      </section>
    </main>
  )
}
