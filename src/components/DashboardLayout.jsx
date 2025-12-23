import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <Header />

        <div className="flex flex-1 overflow-hidden">
            <Sidebar />

            <main className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
            <Outlet />
            </main>
        </div>
    </div>
  )
}

export default DashboardLayout
