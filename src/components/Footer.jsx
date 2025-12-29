import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between">
        <div>
          <div className="font-semibold text-primary">Emmanuel Christian Belivers Assembly</div>
          <div>Tyldesley Rd • Atherton • Manchester</div>
          <div>Phone: 0000 000000</div>
        </div>
        <div className="mt-4 md:mt-0">© {new Date().getFullYear()} Emmanuel Christian Belivers Assembly — All rights reserved</div>
      </div>
    </footer>
  )
}
