import React from 'react'

const beliefs = [
  {title: 'The Bible', body: 'We believe the Bible is the inspired, infallible, and authoritative Word of God (2 Timothy 3:16).'},
  {title: 'God', body: 'We believe in one true God, eternally existing as Father, Son, and Holy Spirit (Matthew 28:19).'},
  {title: 'Jesus Christ', body: 'We believe Jesus Christ is fully God and fully man; He died for our sins and rose again for our justification (1 Corinthians 15:3–4).'},
  {title: 'Salvation', body: 'We believe salvation is by grace through faith in Christ alone (Ephesians 2:8–9).'},
  {title: 'The Church', body: 'We believe the local church gathers to worship, to hear God’s Word, and to serve one another (Acts 2:42).'},
  {title: 'The Return of Christ', body: 'We believe Jesus will return bodily and visibly to judge the living and the dead (Acts 1:11).'},
]

export default function Beliefs(){
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-primary">Our Beliefs — Rooted in Scripture</h2>
      <p className="mt-3 text-gray-600">Below are concise statements anchored in Scripture. We welcome you to study these passages with us.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {beliefs.map((b)=> (
          <div key={b.title} className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold">{b.title}</h3>
            <p className="mt-2 text-gray-600">{b.body}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
