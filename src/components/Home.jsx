import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center h-screen">
        <div className="animate-float">
          <img 
            className="w-80 h-80 object-contain mb-8 hover:scale-105 transition-transform duration-300" 
            src={logo} 
            alt="Intelligentsia Club Logo"
          />
        </div>
        <Link 
          to='/loading'
          className="px-8 py-3 bg-white hover:bg-gray-200 rounded-full text-black font-semibold text-lg tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Launch App
        </Link>
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  )
}

export default Home