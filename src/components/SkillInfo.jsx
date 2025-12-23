import React from 'react'

const SkillInfo = ({ form, onChange, onCVUpload, cvFile }) => {
  return (
    <section className='w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6 transition-all duration-300'>
      <h2 className='text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white flex items-center justify-center gap-2'>
        <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        Skill Information
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='space-y-4'>
          <div className='relative'>
              <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
              </div>
              <input 
                  name="primarySkill"
                  value={form.primarySkill}
                  onChange={onChange} 
                  className='border-2 border-gray-300 dark:border-gray-600 w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all' 
                  type="text" 
                  placeholder='Enter Primary Skill' />
          </div>
          <div className='relative'>
              <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
              </div>
              <input 
                  name="experienceYears"
                  value={form.experienceYears}
                  onChange={onChange}   
                  className='border-2 border-gray-300 dark:border-gray-600 w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all' 
                  type="number" 
                  placeholder='Enter Years of Experience' />
          </div>
      </div>
      <div className='space-y-4'>
        <div className='relative'>
            <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            </div>
            <input 
                name="secondarySkill"
                value={form.secondarySkill}
                onChange={onChange} 
                className='border-2 border-gray-300 dark:border-gray-600 w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all' 
                type="text" 
                placeholder='Enter Secondary Skill' />
        </div>
      <div className='relative'>
        
        <div className='relative group'>
          <input
            id="cv-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => onCVUpload(e.target.files[0])}
            className='hidden'
          />
          <label 
            htmlFor="cv-upload"
            className='cursor-pointer flex items-center justify-center gap-3 w-full p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 group-hover:scale-[1.02]'
          >
            <svg className="w-6 h-6 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span className='text-gray-600 dark:text-gray-300 font-medium'>
              {cvFile ? 'Change File' : 'Choose File'}
            </span>
            <span className='text-gray-600 dark:text-gray-300 font-medium'>Upload CV</span>
            <span className='text-sm text-gray-500 dark:text-gray-400'> (PDF, DOC, DOCX)</span>
          </label>
        </div>

        {cvFile && (
          <div className="flex items-center gap-2 mt-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-sm text-green-700 dark:text-green-300 font-medium truncate">
              {cvFile.name}
            </p>
          </div>
        )}
      </div>
      </div>
      </div>
    </section>
  )
}

export default SkillInfo
