import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">ICA</div>
          <div>
            <div className="text-lg font-semibold text-primary">Immanuel Church</div>
            <div className="text-sm text-gray-500">A welcoming community</div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-primary font-semibold' : 'text-gray-700'}>Home</NavLink>
          <NavLink to="/beliefs" className={({isActive}) => isActive ? 'text-primary font-semibold' : 'text-gray-700'}>Beliefs</NavLink>
          <NavLink to="/activities" className={({isActive}) => isActive ? 'text-primary font-semibold' : 'text-gray-700'}>Activities</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? 'text-primary font-semibold' : 'text-gray-700'}>Blog</NavLink>
          <NavLink to="/admin" className={({isActive}) => isActive ? 'text-primary font-semibold' : 'text-gray-700'}>Admin</NavLink>
        </nav>

        <div className="md:hidden">
          <button className="px-3 py-2 focus-ring">Menu</button>
        </div>
      </div>
    </header>
  )
}
