import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-white dark:bg-gray-800 w-64 border-r-2 border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300'>
      <div className='p-4 space-y-2'>
        <button className='w-full flex items-center gap-3 px-4 py-3 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 dark:from-blue-700 dark:to-blue-800 dark:hover:from-blue-800 dark:hover:to-blue-900 text-white rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg font-medium'>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          View Profile
        </button>
        <button className='w-full flex items-center gap-3 px-4 py-3 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 dark:from-blue-700 dark:to-blue-800 dark:hover:from-blue-800 dark:hover:to-blue-900 text-white rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg font-medium'>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default Sidebar
