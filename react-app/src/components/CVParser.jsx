import React, { useState } from 'react';
import SkillCategory from './SkillCategory';

const CVParser = () => {
  const [cvFile, setCvFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [cvData, setCvData] = useState(null);
  const [error, setError] = useState(null);

  // Handle CV upload and processing
  const handleFileUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword'
    ];
    
    if (!validTypes.includes(file.type)) {
      setError('Please upload a PDF or DOCX file only');
      return;
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB');
      return;
    }

    setIsProcessing(true);
    setError(null);
    setCvData(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8000/api/process-cv', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to process CV');
      }

      const data = await response.json();
      console.log('✅ CV parsed successfully:', data);
      
      setCvData(data);
      setCvFile(file);
      
    } catch (error) {
      console.error('❌ Error processing CV:', error);
      setError(error.message || 'Failed to process CV. Please try again.');
      setCvFile(null);
    } finally {
      setIsProcessing(false);
    }
  };

  // Reset state
  const handleReset = () => {
    setCvFile(null);
    setCvData(null);
    setError(null);
  };

  // Skill domain mappings (matching backend utils.py)
  const SKILL_DOMAINS = {
    // Backend Development
    "node.js": "Backend Development", "express.js": "Backend Development", "django": "Backend Development",
    "flask": "Backend Development", "spring": "Backend Development", "fastapi": "Backend Development",
    "nest.js": "Backend Development", "restful apis": "Backend Development", "graphql": "Backend Development",
    
    // Frontend Development
    "react.js": "Frontend Development", "react": "Frontend Development", "vue.js": "Frontend Development",
    "angular": "Frontend Development", "html": "Frontend Development", "css": "Frontend Development",
    "javascript": "Frontend Development", "typescript": "Frontend Development", "next.js": "Frontend Development",
    "socket.io": "Frontend Development", "html 5": "Frontend Development", "html5": "Frontend Development",
    "tailwind css": "Frontend Development", "bootstrap": "Frontend Development", "sass": "Frontend Development",
    "scss": "Frontend Development", "webpack": "Frontend Development",
    
    // Mobile Development
    "react native": "Mobile Development", "flutter": "Mobile Development", "kotlin": "Mobile Development",
    "swift": "Mobile Development", "android": "Mobile Development", "ios": "Mobile Development",
    
    // Database Management
    "mongodb": "Database Management", "mysql": "Database Management", "postgresql": "Database Management",
    "sql": "Database Management", "redis": "Database Management", "dynamodb": "Database Management",
    "vector databases": "Database Management", "sqlite": "Database Management", "oracle": "Database Management",
    
    // DevOps & Cloud
    "docker": "DevOps & Cloud", "kubernetes": "DevOps & Cloud", "aws": "DevOps & Cloud",
    "azure": "DevOps & Cloud", "gcp": "DevOps & Cloud", "ci/cd": "DevOps & Cloud",
    "jenkins": "DevOps & Cloud", "terraform": "DevOps & Cloud",
    
    // Programming Languages
    "python": "Programming Languages", "java": "Programming Languages", "c++": "Programming Languages",
    "c#": "Programming Languages", "go": "Programming Languages", "rust": "Programming Languages",
    "c": "Programming Languages",
    
    // AI & Machine Learning
    "tensorflow": "AI & Machine Learning", "pytorch": "AI & Machine Learning", "keras": "AI & Machine Learning",
    "scikit-learn": "AI & Machine Learning", "langchain": "AI & Machine Learning",
    "generative ai": "AI & Machine Learning", "gemini api": "AI & Machine Learning",
    "supervised learning": "AI & Machine Learning", "unsupervised learning": "AI & Machine Learning",
    "artificial neural networks (ann)": "AI & Machine Learning", "convolutional neural networks (cnn)": "AI & Machine Learning",
    "model training": "AI & Machine Learning", "evaluation & optimization": "AI & Machine Learning",
    "nlp techniques": "AI & Machine Learning", "speech recognition apis": "AI & Machine Learning",
    "mediapipe": "AI & Machine Learning", "opencv": "AI & Machine Learning",
    "neural networks": "AI & Machine Learning", "deep learning": "AI & Machine Learning",
    "machine learning": "AI & Machine Learning", "computer vision": "AI & Machine Learning",
    "xgboost": "AI & Machine Learning", "lightgbm": "AI & Machine Learning", "catboost": "AI & Machine Learning",
    
    // Data Science & Analytics
    "pandas": "Data Science", "numpy": "Data Science", "matplotlib": "Data Science",
    "beautiful soup": "Data Science", "youtube data api": "Data Science",
    "streamlit": "Data Science", "seaborn": "Data Science", "plotly": "Data Science",
    "data analysis": "Data Science", "data visualization": "Data Science",
    
    // Tools & Version Control
    "git": "Development Tools", "postman": "Development Tools", "multer": "Development Tools",
    "jupyter notebook": "Development Tools", "google colab": "Development Tools", 
    "github": "Development Tools", "gitlab": "Development Tools", "vscode": "Development Tools",
    "visual studio code": "Development Tools", "pycharm": "Development Tools",
    
    // Security & Authentication
    "jwt-based authentication": "Security & Authentication", "oauth": "Security & Authentication",
    
    // Blockchain
    "web3": "Blockchain", "blockchain technology": "Blockchain",
  };

  // Group skills by category (using backend's domain mappings)
  const getSkillsByCategory = () => {
    if (!cvData?.allSkills) return {};
    
    const grouped = {};
    cvData.allSkills.forEach(skill => {
      // Map skill name to domain
      const skillLower = skill.name.toLowerCase();
      const domain = SKILL_DOMAINS[skillLower] || 'Other Technologies';
      
      if (!grouped[domain]) {
        grouped[domain] = [];
      }
      grouped[domain].push(skill);
    });
    
    return grouped;
  };

  const skillsByCategory = getSkillsByCategory();

  // Category display names and colors (matching backend domain categories)
  const categoryConfig = {
    'Frontend Development': { color: 'blue' },
    'Backend Development': { color: 'green' },
    'Mobile Development': { color: 'purple' },
    'Database Management': { color: 'pink' },
    'DevOps & Cloud': { color: 'orange' },
    'Programming Languages': { color: 'indigo' },
    'AI & Machine Learning': { color: 'red' },
    'Data Science': { color: 'teal' },
    'Development Tools': { color: 'gray' },
    'Security & Authentication': { color: 'yellow' },
    'Blockchain': { color: 'cyan' },
    'Other Technologies': { color: 'slate' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 sm:p-3 rounded-xl shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CV Parser
              </h1>
            </div>
            {cvData && (
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="hidden sm:inline">New Upload</span>
                <span className="sm:hidden">Reset</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {!cvData ? (
          /* Upload Section */
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 animate-fadeIn">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Upload Your CV
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                AI-powered extraction of skills, experience, and personal information
              </p>
            </div>

            {/* Upload Box */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 animate-fadeInUp">
              <input
                id="cv-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                disabled={isProcessing}
                className="hidden"
              />
              <label 
                htmlFor="cv-upload"
                className={`cursor-pointer flex flex-col items-center justify-center gap-6 w-full p-8 sm:p-12 border-3 border-dashed rounded-2xl transition-all duration-300 ${
                  isProcessing 
                    ? 'border-blue-400 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20 cursor-wait' 
                    : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-600 hover:scale-[1.02]'
                }`}
              >
                {isProcessing ? (
                  <>
                    <div className="relative">
                      <div className="w-20 h-20 border-4 border-blue-200 dark:border-blue-800 rounded-full"></div>
                      <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                    </div>
                    <div className="text-center">
                      <p className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        Processing CV...
                      </p>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        Extracting information using AI
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 animate-pulse"></div>
                    </div>
                    <div className="text-center">
                      <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Click to Upload or Drag & Drop
                      </p>
                      <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                        PDF, DOC, DOCX (Max 10MB)
                      </p>
                    </div>
                  </>
                )}
              </label>

              {/* Error Message */}
              {error && (
                <div className="mt-6 flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl animate-shake">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-red-700 dark:text-red-300">Error</p>
                    <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Results Section */
          <div className="space-y-6 sm:space-y-8">
            {/* Success Banner */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-2xl p-6 sm:p-8 text-white animate-fadeInDown">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">CV Processed Successfully!</h3>
                    <p className="text-sm sm:text-base text-green-100">{cvFile?.name}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <div className="bg-white/20 px-4 py-2 rounded-lg text-center">
                    <p className="text-2xl font-bold">{cvData.allSkills?.length || 0}</p>
                    <p className="text-xs text-green-100">Skills</p>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-lg text-center">
                    <p className="text-2xl font-bold">{cvData.workExperience?.length || 0}</p>
                    <p className="text-xs text-green-100">Jobs</p>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-lg text-center">
                    <p className="text-2xl font-bold">{cvData.experienceYears || 0}</p>
                    <p className="text-xs text-green-100">Years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 animate-fadeInLeft">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {cvData.fullName && (
                  <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow duration-300">
                    <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Full Name</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{cvData.fullName}</p>
                    </div>
                  </div>
                )}
                {cvData.email && (
                  <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow duration-300">
                    <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Email</p>
                      <p className="font-semibold text-gray-900 dark:text-white break-all">{cvData.email}</p>
                    </div>
                  </div>
                )}
                {cvData.contact && (
                  <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow duration-300">
                    <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Contact</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{cvData.contact}</p>
                    </div>
                  </div>
                )}
                {cvData.designation && (
                  <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow duration-300">
                    <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Designation</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{cvData.designation}</p>
                    </div>
                  </div>
                )}
                {cvData.experienceYears > 0 && (
                  <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow duration-300">
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Experience</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{cvData.experienceYears} years</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Skills by Category */}
            {Object.keys(skillsByCategory).length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 animate-fadeInRight">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></div>
                  Skills & Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(skillsByCategory).map(([category, skills]) => (
                    <SkillCategory
                      key={category}
                      category={category}
                      categoryName={category}
                      color={categoryConfig[category]?.color || 'gray'}
                      skills={skills}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Work Experience */}
            {cvData.workExperience && cvData.workExperience.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 animate-fadeInUp">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
                  Work Experience
                </h3>
                <div className="space-y-6">
                  {cvData.workExperience.map((job, index) => (
                    <div 
                      key={index} 
                      className="relative pl-8 pb-6 border-l-2 border-gray-200 dark:border-gray-700 last:pb-0 hover:border-green-500 dark:hover:border-green-400 transition-colors duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-500 border-4 border-white dark:border-gray-800"></div>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{job.position}</h4>
                          <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full w-fit">
                            {job.duration}
                          </span>
                        </div>
                        <p className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">{job.company}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                          {job.startDate} - {job.endDate}
                        </p>
                        {job.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {job.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {cvData.education && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 animate-fadeInUp">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-full"></div>
                  Education
                </h3>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 sm:p-6 border-2 border-yellow-200 dark:border-yellow-800">
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line">
                    {cvData.education}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default CVParser;
