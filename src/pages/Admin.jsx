import React, {useState} from 'react'
import { initialPosts } from '@/lib/sampleData'
import { v4 as uuidv4 } from 'uuid'

export default function Admin(){
  const [posts, setPosts] = useState(initialPosts)
  const [form, setForm] = useState({title:'', excerpt:'', content:''})

  function submit(e){
    e.preventDefault()
    const newPost = { id: uuidv4(), ...form, approved: false, date: new Date().toISOString().slice(0,10) }
    setPosts([newPost, ...posts])
    setForm({title:'', excerpt:'', content:''})
  }

  function toggleApprove(id){
    setPosts(posts.map(p => p.id === id ? {...p, approved: !p.approved} : p))
  }

  function remove(id){
    setPosts(posts.filter(p => p.id !== id))
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-primary">Admin Panel</h2>
      <p className="mt-2 text-gray-600">Create Scripture-based posts, devotionals, and announcements. Posts require approval before appearing publicly.</p>

      <section className="mt-6 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold">Create Post</h3>
        <form onSubmit={submit} className="mt-4 space-y-3">
          <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="Title" className="w-full border p-2 rounded" />
          <input value={form.excerpt} onChange={e => setForm({...form, excerpt: e.target.value})} placeholder="Excerpt" className="w-full border p-2 rounded" />
          <textarea value={form.content} onChange={e => setForm({...form, content: e.target.value})} placeholder="Content" className="w-full border p-2 rounded h-32" />
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-primary text-white rounded">Create (awaiting approval)</button>
          </div>
        </form>
      </section>

      <section className="mt-6">
        <h3 className="font-semibold">All Posts</h3>
        <div className="mt-3 space-y-3">
          {posts.map(p => (
            <div key={p.id} className="p-4 bg-white rounded shadow-sm flex justify-between items-center">
              <div>
                <div className="font-semibold">{p.title}</div>
                <div className="text-xs text-gray-500">{p.date} • {p.approved ? 'Approved' : 'Pending'}</div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => toggleApprove(p.id)} className="px-3 py-1 rounded border">{p.approved ? 'Unapprove' : 'Approve'}</button>
                <button onClick={() => remove(p.id)} className="px-3 py-1 rounded border">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
