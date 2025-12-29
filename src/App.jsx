import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Beliefs from '@/pages/Beliefs'
import Activities from '@/pages/Activities'
import Blog from '@/pages/Blog'
import Admin from '@/pages/Admin'
import About from '@/pages/About'

export default function App(){
  return (
    <div className="min-h-screen bg-light text-text">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beliefs" element={<Beliefs />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  )
}
