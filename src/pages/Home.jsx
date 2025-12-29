import React from 'react'
import Hero from '@/components/Hero'
import { Book, Users, Heart, Calendar, BookOpen, Sparkles } from 'lucide-react';

export default function Home(){
  return (
    <main>
      <Hero />
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3552] mb-3">
            Welcome to Our Community
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are a fellowship devoted to honoring Christ through faithful biblical teaching and genuine community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group perspective">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#D4A017]/30 hover:-translate-y-2 hover:scale-105 origin-bottom transform">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C3552] to-[#1a1f35] flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                <Book className="w-6 h-6 text-[#D4A017]" />
              </div>
              <h4 className="font-bold text-[#2C3552] text-xl mb-3">Our Focus</h4>
              <p className="text-gray-600 leading-relaxed">
                We exist to exalt Christ, faithfully teach the Bible, and make disciples.
                Our worship, preaching, and ministries are Scripture-centered.
              </p>
            </div>
          </div>

          <div className="group perspective">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#D4A017]/30 hover:-translate-y-2 hover:scale-105 origin-bottom transform">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C3552] to-[#1a1f35] flex items-center justify-center mb-4 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300">
                <Calendar className="w-6 h-6 text-[#D4A017]" />
              </div>
              <h4 className="font-bold text-[#2C3552] text-xl mb-3">Service Times</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                Join us for worship and prayer throughout the week:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-gradient-to-r from-gray-50 to-transparent rounded-lg group-hover:from-[#D4A017]/10 transition-colors">
                  <span className="text-gray-700">Sunday Worship</span>
                  <span className="font-semibold text-[#2C3552]">5:20 PM</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gradient-to-r from-gray-50 to-transparent rounded-lg group-hover:from-[#D4A017]/10 transition-colors">
                  <span className="text-gray-700">Wednesday Prayer</span>
                  <span className="font-semibold text-[#2C3552]">8:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group perspective">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#D4A017]/30 hover:-translate-y-2 hover:scale-105 origin-bottom transform">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C3552] to-[#1a1f35] flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                <Users className="w-6 h-6 text-[#D4A017]" />
              </div>
              <h4 className="font-bold text-[#2C3552] text-xl mb-3">Get Involved</h4>
              <p className="text-gray-600 leading-relaxed">
                Join a home fellowship, serve in outreach, or attend a Bible study.
                We encourage every member to grow in Scripture.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Latest from the Word*/}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2C3552] to-[#1a1f35] flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-[#D4A017]" />
            </div>
            <h2 className="text-3xl font-bold text-[#2C3552]">Latest from the Word</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100 hover:border-[#D4A017]/30">
              <div className="flex items-start justify-between mb-3">
                <div className="px-3 py-1 bg-[#2C3552]/5 rounded-full text-xs font-semibold text-[#2C3552]">
                  Devotional
                </div>
                <div className="text-xs text-gray-500">Nov 1, 2025</div>
              </div>
              <h3 className="font-bold text-xl text-[#2C3552] mb-2 group-hover:text-[#D4A017] transition-colors">
                Walking in the Light
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A short reflection on 1 John 1:7 and living transparently before the Lord,
                embracing the truth of His Word in our daily walk.
              </p>
              <button className="mt-4 text-[#2C3552] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More
                <span className="text-[#D4A017]">→</span>
              </button>
            </article>

            <article className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100 hover:border-[#D4A017]/30">
              <div className="flex items-start justify-between mb-3">
                <div className="px-3 py-1 bg-[#2C3552]/5 rounded-full text-xs font-semibold text-[#2C3552]">
                  Teaching
                </div>
                <div className="text-xs text-gray-500">Oct 15, 2025</div>
              </div>
              <h3 className="font-bold text-xl text-[#2C3552] mb-2 group-hover:text-[#D4A017] transition-colors">
                The Sufficiency of Scripture
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Why the Bible alone is our authority for faith and practice (2 Timothy 3:16).
                Exploring the completeness and reliability of God's Word.
              </p>
              <button className="mt-4 text-[#2C3552] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More
                <span className="text-[#D4A017]">→</span>
              </button>
            </article>
          </div>
        </div>
      </section>


          {/* Upcoming Events */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4A017] to-[#c49015] flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#2C3552]">Upcoming Events</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-[#D4A017] group">
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-[#2C3552] mb-2 group-hover:text-[#D4A017] transition-colors">
                    Youth & Cottage Meeting
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Third Saturday • A time of fellowship, prayer, and scriptural encouragement
                    for our youth and families.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                <Calendar className="w-4 h-4 text-[#D4A017]" />
                <span className="text-sm font-semibold text-[#2C3552]">Next: Feb 15, 2025</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4A017]/10 to-transparent rounded-bl-full"></div>
          </div>

          <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-[#D4A017] group">
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-[#2C3552] mb-2 group-hover:text-[#D4A017] transition-colors">
                    Brothers' & Sisters' Meeting
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    First Saturday • Dedicated teaching and prayer for spiritual growth
                    and encouragement in Christ.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                <Calendar className="w-4 h-4 text-[#D4A017]" />
                <span className="text-sm font-semibold text-[#2C3552]">Next: Mar 1, 2025</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4A017]/10 to-transparent rounded-bl-full"></div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#2C3552] to-[#1a1f35] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 text-[#D4A017]" />
          <h2 className="text-3xl font-bold mb-4">Come Visit Us</h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-8">
            Whether you're looking for a church home or just visiting, we'd love to welcome you.
            Experience biblical teaching, genuine fellowship, and the love of Christ.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#services"
              className="px-8 py-3 bg-[#D4A017] text-[#2C3552] rounded-lg font-semibold hover:bg-[#e0b020] transition-all shadow-lg hover:shadow-xl"
            >
              Plan Your Visit
            </a>
            <a
              href="tel:0000000000"
              className="px-8 py-3 border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>


    </main>
  )
}
