import React, {useState} from 'react'
import BlogCard from '@/components/BlogCard'
import { initialPosts } from '@/lib/sampleData'
import { BookOpen, Calendar } from 'lucide-react';


export default function Blog(){
  const [posts] = useState(initialPosts.filter(p => p.approved))

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C3552] to-[#1a1f35] flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-[#D4A017]" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-[#2C3552] mb-4">Blog & Teachings</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Reflections, devotionals, and biblical teachings to encourage your walk with Christ
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-100 hover:border-[#D4A017]/30 group"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#2C3552]/5 rounded-full text-xs font-semibold text-[#2C3552]">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#2C3552] mb-3 group-hover:text-[#D4A017] transition-colors">
              {post.title}
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>

            <button className="text-[#2C3552] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Read Full Article
              <span className="text-[#D4A017]">→</span>
            </button>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-block px-6 py-3 bg-gray-100 rounded-lg text-gray-600">
          More articles coming soon
        </div>
      </div>
    </div>
  );
}
