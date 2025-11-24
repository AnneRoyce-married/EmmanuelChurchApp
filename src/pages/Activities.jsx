import React from 'react'

const activities = [
  {title: 'Lord\'s Supper', time: 'First Sunday of each month — a time of remembrance and worship (Luke 22:19).'},
  {title: 'Bible Teaching', time: 'Sermons and studies focused on Scripture exposition.'},
  {title: 'Prayer Meeting', time: 'Weekly prayer and intercession (Philippians 4:6).'},
  {title: 'Gospel Outreach', time: 'Local outreach and evangelism in the community.'},
  {title: 'Youth & Children', time: 'Biblical teaching for all ages, encouraging discipleship in the home.'},
]

export default function Activities(){
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-primary">Activities — Worship, Study, Service</h2>
      <ul className="mt-6 space-y-4">
        {activities.map(a => (
          <li key={a.title} className="p-4 bg-white rounded-lg shadow-sm">
            <div className="font-semibold">{a.title}</div>
            <div className="text-sm text-gray-600 mt-1">{a.time}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}
