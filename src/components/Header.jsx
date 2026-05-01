import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Church } from 'lucide-react';
import { useState } from 'react';

export default function Header(){
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C3552] to-[#1a1f35] flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl transition-shadow">
            <Church className="w-6 h-6" />
          </div>
          <div>
            <div className="text-lg font-bold text-[#2C3552] leading-tight">
              Emmanuel Christian Believers Assembly
            </div>
            <div className="text-xs text-gray-500 font-medium">Exalting Christ • Teaching Scripture • Making Disciples</div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-[#2C3552] font-semibold border-b-2 border-[#D4A017] pb-1'
                : 'text-gray-600 hover:text-[#2C3552] transition-colors'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-[#2C3552] font-semibold border-b-2 border-[#D4A017] pb-1'
                : 'text-gray-600 hover:text-[#2C3552] transition-colors'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/beliefs"
            className={({ isActive }) =>
              isActive
                ? 'text-[#2C3552] font-semibold border-b-2 border-[#D4A017] pb-1'
                : 'text-gray-600 hover:text-[#2C3552] transition-colors'
            }
          >
            Beliefs
          </NavLink>
          <NavLink
            to="/activities"
            className={({ isActive }) =>
              isActive
                ? 'text-[#2C3552] font-semibold border-b-2 border-[#D4A017] pb-1'
                : 'text-gray-600 hover:text-[#2C3552] transition-colors'
            }
          >
            Activities
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? 'text-[#2C3552] font-semibold border-b-2 border-[#D4A017] pb-1'
                : 'text-gray-600 hover:text-[#2C3552] transition-colors'
            }
          >
            Blog
          </NavLink>
      
          <NavLink to="/admin" className={({isActive}) => isActive ? 'text-[#2C3552] font-semibold border-b-2 border-[#D4A017] pb-1'
                : 'text-gray-600 hover:text-[#2C3552] transition-colors'}>Admin</NavLink>
        </nav>

        

        <div className="md:hidden">
          <button className="px-3 py-2 focus-ring">Menu</button>
        </div>
      </div>
    </header>
  )
}
