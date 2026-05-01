import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({post}){
  return (
    <article className="border rounded-lg p-4 hover:shadow">
      <h3 className="text-lg font-semibold text-primary">{post.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs text-gray-500">{post.date}</div>
        <Link to={`/blog/${post.id}`} className="text-sm">Read →</Link>
      </div>
    </article>
  )
}
