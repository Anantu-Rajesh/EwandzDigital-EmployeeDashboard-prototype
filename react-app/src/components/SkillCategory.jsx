import React, { useState } from 'react';

const SkillCategory = ({ category, categoryName, color, skills }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Color configurations
  const colorClasses = {
    blue: {
      bg: 'from-blue-500 to-blue-600',
      bgLight: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-600 dark:text-blue-400',
      badge: 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
    },
    green: {
      bg: 'from-green-500 to-green-600',
      bgLight: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-600 dark:text-green-400',
      badge: 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      bgLight: 'bg-purple-50 dark:bg-purple-900/20',
      border: 'border-purple-200 dark:border-purple-800',
      text: 'text-purple-600 dark:text-purple-400',
      badge: 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'
    },
    pink: {
      bg: 'from-pink-500 to-pink-600',
      bgLight: 'bg-pink-50 dark:bg-pink-900/20',
      border: 'border-pink-200 dark:border-pink-800',
      text: 'text-pink-600 dark:text-pink-400',
      badge: 'bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300'
    },
    orange: {
      bg: 'from-orange-500 to-orange-600',
      bgLight: 'bg-orange-50 dark:bg-orange-900/20',
      border: 'border-orange-200 dark:border-orange-800',
      text: 'text-orange-600 dark:text-orange-400',
      badge: 'bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300'
    },
    indigo: {
      bg: 'from-indigo-500 to-indigo-600',
      bgLight: 'bg-indigo-50 dark:bg-indigo-900/20',
      border: 'border-indigo-200 dark:border-indigo-800',
      text: 'text-indigo-600 dark:text-indigo-400',
      badge: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300'
    },
    red: {
      bg: 'from-red-500 to-red-600',
      bgLight: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      text: 'text-red-600 dark:text-red-400',
      badge: 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300'
    },
    teal: {
      bg: 'from-teal-500 to-teal-600',
      bgLight: 'bg-teal-50 dark:bg-teal-900/20',
      border: 'border-teal-200 dark:border-teal-800',
      text: 'text-teal-600 dark:text-teal-400',
      badge: 'bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300'
    },
    yellow: {
      bg: 'from-yellow-500 to-yellow-600',
      bgLight: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      text: 'text-yellow-600 dark:text-yellow-400',
      badge: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300'
    },
    cyan: {
      bg: 'from-cyan-500 to-cyan-600',
      bgLight: 'bg-cyan-50 dark:bg-cyan-900/20',
      border: 'border-cyan-200 dark:border-cyan-800',
      text: 'text-cyan-600 dark:text-cyan-400',
      badge: 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300'
    },
    slate: {
      bg: 'from-slate-500 to-slate-600',
      bgLight: 'bg-slate-50 dark:bg-slate-900/20',
      border: 'border-slate-200 dark:border-slate-700',
      text: 'text-slate-600 dark:text-slate-400',
      badge: 'bg-slate-100 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300'
    },
    gray: {
      bg: 'from-gray-500 to-gray-600',
      bgLight: 'bg-gray-50 dark:bg-gray-900/20',
      border: 'border-gray-200 dark:border-gray-700',
      text: 'text-gray-600 dark:text-gray-400',
      badge: 'bg-gray-100 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300'
    }
  };

  const colors = colorClasses[color] || colorClasses.gray;

  // Get icon based on category
  const getCategoryIcon = () => {
    const categoryLower = category.toLowerCase();
    
    if (categoryLower.includes('frontend')) {
      return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      );
    }
    
    if (categoryLower.includes('backend')) {
      return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      );
    }
    
    if (categoryLower.includes('mobile')) {
      return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      );
    }
    
    if (categoryLower.includes('database')) {
      return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      );
    }
    
    if (categoryLower.includes('devops') || categoryLower.includes('cloud')) {
      return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      );
    }
    
    if (categoryLower.includes('programming')) {
      return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      );
    }
    
    if (categoryLower.includes('ai') || categoryLower.includes('machine learning') || categoryLower.includes('ml')) {
      return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      );
    }
    
    if (categoryLower.includes('data science') || categoryLower.includes('data')) {
      return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      );
    }
    
    if (categoryLower.includes('tools') || categoryLower.includes('development tools')) {
      return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      );
    }
    
    if (categoryLower.includes('security') || categoryLower.includes('authentication')) {
      return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      );
    }
    
    if (categoryLower.includes('blockchain')) {
      return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      );
    }
    
    // Default icon
    return (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    );
  };

  return (
    <div className="group">
      {/* Category Box - Clickable */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`cursor-pointer bg-gradient-to-r ${colors.bg} rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {getCategoryIcon()}
              </svg>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">{categoryName}</h4>
          </div>
          <div className="bg-white/20 px-3 py-1 rounded-full">
            <span className="text-sm font-bold text-white">{skills.length}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-white/90">
          <p className="text-xs sm:text-sm">Click to {isExpanded ? 'collapse' : 'expand'}</p>
          <svg 
            className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Expanded Skills List */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`${colors.bgLight} ${colors.border} border-2 rounded-xl p-4 shadow-inner`}>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${colors.badge} px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-2 hover:scale-105 transition-transform duration-200 animate-fadeIn`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span>{skill.name}</span>
                {skill.proficiency && (
                  <span className="text-xs opacity-75">
                    • {skill.proficiency}
                  </span>
                )}
              </div>
            ))}
          </div>
          
          {/* Summary */}
          <div className={`mt-4 pt-4 border-t-2 ${colors.border} flex items-center gap-2 ${colors.text}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm font-medium">
              Total {skills.length} skill{skills.length !== 1 ? 's' : ''} in this category
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCategory;
