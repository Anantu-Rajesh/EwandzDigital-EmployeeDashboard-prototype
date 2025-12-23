import React from 'react'
import logo from "../assets/logo(transparent).png"
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className='flex justify-between w-full p-4 h-20 bg-linear-to-r from-blue-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 items-center shadow-lg transition-all duration-300'>
      <div className='w-1/4 h-full overflow-hidden flex items-center pl-2'>
        <img className='h-full w-1/2 ' src={logo} alt="Logo" />
      </div>
      <div className='w-2/4 h-full flex justify-center items-center font-bold text-2xl text-white tracking-wide'>
        Employee Dashboard
      </div>
      <div className='w-1/4 h-full flex gap-3 justify-end items-center'>
        <button
          onClick={toggleTheme}
          className='h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110'
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
        <div className='h-10 px-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-medium cursor-pointer transition-all duration-300 hover:scale-105'>
          User Profile
        </div>
      </div>
    </div>
  )
}

export default Header

