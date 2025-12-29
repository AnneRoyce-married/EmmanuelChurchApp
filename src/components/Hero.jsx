import React from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Hero(){
  return (
     <section className="relative bg-gradient-to-br from-[#2C3552] via-[#1f2741] to-[#2C3552] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-[#D4A017] text-[#2C3552] rounded-full text-sm font-semibold">
              Welcome to Our Fellowship
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Emmanuel Christian Believers Assembly
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Join us for worship, fellowship, and spiritual growth as we gather to exalt Christ,
              study God's Word, and grow together in faith.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="#services"
                className="px-6 py-3 rounded-lg bg-[#D4A017] text-[#2C3552] font-semibold hover:bg-[#e0b020] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Plan a Visit
              </a>
              <a
                href="/blog"
                className="px-6 py-3 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
              >
                Read our Blog
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#D4A017]" />
                Service Times
              </h3>
              <div className="space-y-3 text-gray-200">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="font-medium">Sunday Worship</span>
                  <span className="text-[#D4A017] font-semibold">5:20 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="font-medium">Wednesday Prayer</span>
                  <span className="text-[#D4A017] font-semibold">8:00 PM</span>
                </div>
                <div className="flex items-start gap-2 pt-2">
                  <MapPin className="w-4 h-4 text-[#D4A017] mt-1 flex-shrink-0" />
                  <span className="text-sm">Tyldesley Rd, Atherton, Manchester</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#D4A017]/20 to-[#D4A017]/5 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A017]/30 shadow-xl">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#D4A017]" />
                Next Event
              </h3>
              <p className="text-sm text-gray-200 mb-1">Youth & Cottage Meeting</p>
              <p className="text-xs text-gray-300">Third Saturday • Fellowship & Prayer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>




   
  )




}
