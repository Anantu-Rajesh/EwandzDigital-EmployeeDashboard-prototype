import React, { useState } from 'react'
import ProfileInfo from '../components/ProfileInfo'
import WorkInfo from '../components/WorkInfo'
import SkillInfo from '../components/SkillInfo'

const EditProfile = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    contact: "",
    dob: "",
    emergencyContact: "",
    employeeId: "",
    department: "",
    designation: "",
    officeLocation: "",
    primarySkill: "",
    secondarySkill: "",
    experienceYears: ""
  });

  const [cvFile, setCvFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (cvFile) {
      formData.append("cv", cvFile);
    }

    // api call later
    setLoading(false);
  };

  return (
    <div className='max-w-6xl mx-auto'>
    <ProfileInfo 
      form={form}
      onChange={handleChange}/>
    <WorkInfo 
      form={form}
      onChange={handleChange}/>
    <SkillInfo 
      form={form}
      onChange={handleChange}
      onCVUpload={setCvFile}
      cvFile={cvFile}/>

    <div className='w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex gap-4 items-center justify-center transition-all duration-300'>
      <button className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg'>
        Reset Profile
      </button>
      <button 
        onClick={handleSubmit}
        disabled={loading}
        className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'>
        {loading ? (
          <>
            Saving...
          </>
        ) : (
          <>
            Save Profile
          </>
        )}
      </button>
    </div>
    </div>
  )
}

export default EditProfile