import { Users, Heart, MapPin, Globe, Mic2, Coffee } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C3552] mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A welcoming fellowship devoted to exalting Christ, teaching Scripture faithfully, and making disciples
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="group perspective h-full">
            <div className="h-full p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#D4A017]/30 hover:scale-105 hover:-translate-y-2 transform origin-bottom">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2C3552] to-[#1a1f35] flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                <Heart className="w-7 h-7 text-[#D4A017]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C3552] mb-3">Our Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We are a group of believers from diverse backgrounds united in our faith in Christ. Our fellowship is built on Scripture, characterized by genuine love, and open to all who seek to follow Jesus.
              </p>
            </div>
          </div>

          <div className="group perspective h-full">
            <div className="h-full p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#D4A017]/30 hover:scale-105 hover:-translate-y-2 transform origin-bottom">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2C3552] to-[#1a1f35] flex items-center justify-center mb-4 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300">
                <Mic2 className="w-7 h-7 text-[#D4A017]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C3552] mb-3">What We Do</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our ministries include:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center gap-2"><span className="text-[#D4A017]">•</span> Praise & Worship</li>
                <li className="flex items-center gap-2"><span className="text-[#D4A017]">•</span> Prayer & Intercession</li>
                <li className="flex items-center gap-2"><span className="text-[#D4A017]">•</span> Breaking of Bread</li>
                <li className="flex items-center gap-2"><span className="text-[#D4A017]">•</span> Bible Study</li>
              </ul>
            </div>
          </div>

          <div className="group perspective h-full">
            <div className="h-full p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#D4A017]/30 hover:scale-105 hover:-translate-y-2 transform origin-bottom">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2C3552] to-[#1a1f35] flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                <Coffee className="w-7 h-7 text-[#D4A017]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C3552] mb-3">Weekly Gatherings</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Join us for:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center gap-2"><span className="text-[#D4A017]">•</span> Sunday Worship</li>
                <li className="flex items-center gap-2"><span className="text-[#D4A017]">•</span> Bible Study Groups</li>
                <li className="flex items-center gap-2"><span className="text-[#D4A017]">•</span> Prayer Meetings</li>
                <li className="flex items-center gap-2"><span className="text-[#D4A017]">•</span> Fellowship Events</li>
              </ul>
            </div>
          </div>

          <div className="group perspective h-full">
            <div className="h-full p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#D4A017]/30 hover:scale-105 hover:-translate-y-2 transform origin-bottom">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2C3552] to-[#1a1f35] flex items-center justify-center mb-4 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300">
                <Users className="w-7 h-7 text-[#D4A017]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C3552] mb-3">Welcome to All</h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you're from our local area or visiting from elsewhere, you are warmly welcomed. Regardless of your background or journey, our doors are open to all who seek to know and follow Christ.
              </p>
            </div>
          </div>

          <div className="group perspective h-full">
            <div className="h-full p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#D4A017]/30 hover:scale-105 hover:-translate-y-2 transform origin-bottom">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2C3552] to-[#1a1f35] flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                <Globe className="w-7 h-7 text-[#D4A017]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C3552] mb-3">Our Heritage</h3>
              <p className="text-gray-600 leading-relaxed">
                Rooted in the rich evangelical heritage of Brethren Christianity, we uphold Scripture as our authority and emphasize the fundamental truths of the gospel while fostering spiritual growth and community.
              </p>
            </div>
          </div>

          <div className="group perspective h-full">
            <div className="h-full p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#D4A017]/30 hover:scale-105 hover:-translate-y-2 transform origin-bottom">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2C3552] to-[#1a1f35] flex items-center justify-center mb-4 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-[#D4A017]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C3552] mb-3">Our Location</h3>
              <p className="text-gray-600 leading-relaxed">
                Tyldesley Rd, Atherton, Manchester. Conveniently located and easily accessible by public transportation. We look forward to meeting you at our fellowship.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#2C3552] to-[#1a1f35] rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Fellowship</h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-8">
            We invite you to experience the warmth of our community, the depth of Scripture-centered teaching, and the joy of following Christ together. Come as you are.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/"
              className="px-8 py-3 bg-[#D4A017] text-[#2C3552] rounded-lg font-semibold hover:bg-[#e0b020] transition-all shadow-lg hover:shadow-xl"
            >
              Visit Our Homepage
            </a>
            <a
              href="tel:0000000000"
              className="px-8 py-3 border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
