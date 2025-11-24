import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between">
        <div>
          <div className="font-semibold text-primary">Immanuel Church</div>
          <div>123 Church Street • City • Country</div>
          <div>Phone: 01234 567890</div>
        </div>
        <div className="mt-4 md:mt-0">© {new Date().getFullYear()} Immanuel Church — All rights reserved</div>
      </div>
    </footer>
  )
}
