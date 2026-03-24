import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className="border-l-4 border-[var(--orange-test)] bg-orange-50/30 rounded-xl p-10">
          <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>

        <div className='my-10 flex flex-col min-[930px]:flex-row gap-12'>
          <img className='w-100 min-[930px]:max-w-[300px] rounded-lg' src={assets.about_image} alt="" />
          <div className='flex flex-col justify-center gap-6 min-[930px]:w-2/4 text-sm text-gray-600'> 
            <p>QuickCare Connect is a healthcare technology platform designed to simplify access to trusted medical professionals. It enables users to search for qualified doctors, schedule appointments efficiently, and manage their healthcare needs through a secure and user-friendly digital experience.</p>
            <p>Focused on reliability and accessibility, QuickCare Connect leverages modern technology to improve patient–doctor connectivity. Our platform aims to enhance healthcare delivery by ensuring convenience, transparency, and timely access to quality medical services for individuals and families.</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>Our vision is to build an accessible and dependable healthcare ecosystem that bridges patients and providers, delivering timely, transparent, and quality medical services through technology.</p>
          </div>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment booking designed to save time and reduce unnecessary delays.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Easy access to trusted healthcare services anytime, anywhere through a user-friendly platform.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored healthcare experiences that adapt to individual needs and preferences.</p>
        </div>
      </div>
    </div>
  )
}

export default About
