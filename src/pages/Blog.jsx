import React, {useState} from 'react'
import BlogCard from '@/components/BlogCard'
import { initialPosts } from '@/lib/sampleData'

export default function Blog(){
  const [posts] = useState(initialPosts.filter(p => p.approved))

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-primary">Articles & Devotionals</h2>
      <p className="mt-2 text-gray-600">Short Bible reflections, teaching summaries, and mission updates.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {posts.map(p => <BlogCard key={p.id} post={p} />)}
      </div>
    </main>
  )
}
