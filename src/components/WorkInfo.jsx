import React from 'react'

const WorkInfo = ({ form, onChange }) => {
  return (
    <section className='w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6 transition-all duration-300'>
      <h2 className='text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white flex items-center justify-center gap-2'>
        <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Work Information
      </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-4'>
                <div className='relative'>
                    <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                    </div>
                    <input 
                        name="employeeId"
                        value={form.employeeId}
                        onChange={onChange}
                        className='border-2 border-gray-300 dark:border-gray-600 w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all' 
                        type="text" 
                        placeholder='Enter Employee ID' />
                </div>
                <div className='relative'>
                    <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <input 
                        name="departmentName"
                        value={form.departmentName}
                        onChange={onChange}
                        className='border-2 border-gray-300 dark:border-gray-600 w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all' 
                        type="text" 
                        placeholder='Enter Department name' />
                </div>
            </div>
            <div className='space-y-4'>
              <div className='relative'>
                  <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                  </div>
                  <input 
                      name="designation"
                      value={form.designation}
                      onChange={onChange}
                      className='border-2 border-gray-300 dark:border-gray-600 w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all' 
                      type="text" 
                      placeholder='Enter Designation' />
              </div>
              <div className='relative'>
                  <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                  </div>
                  <input 
                      name="officeLocation"
                      value={form.officeLocation}
                      onChange={onChange}
                      className='border-2 border-gray-300 dark:border-gray-600 w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all' 
                      type="text" 
                      placeholder='Enter Office Location' />
              </div>
            </div>
        </div>
    </section>
  )
}

export default WorkInfo
