import React from 'react'
import { assets } from '../assets/assets'


const Header = () => {
  return (
    <div className="relative flex flex-col md:flex-row bg-[var(--primary)] border-3 border-[var(--orange-test)] rounded-lg px-6 md:px-10 lg:px-20  overflow-hidden min-h-[420px]">
      
      {/* -------- Left Side -------- */}
      <div className="md:basis-[50%] z-10 pt-13 flex flex-col gap-6 text-white">
        
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
          Book Appointment <br /> With Trusted Doctors
        </h1>

        {/* Description */}
        <div className="flex items-start gap-4">
          <div>
            <img
              src={assets.group_profiles}
              alt=""
              className="mb-3"
            />
            <p className="text-sm leading-relaxed text-white/90">
              Simply browse through our extensive list of trusted doctors, <br />
              Schedule your appointment hassle-free
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#speciality"
          className="inline-flex items-center gap-2 w-fit font-medium relative group"
        >
          Book appointment
          <img
            src={assets.arrow_icon}
            alt=""
            className="w-4 transition-transform group-hover:translate-x-1"
          />

          {/* Orange underline */}
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[var(--orange-test)] group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>

      {/* -------- Right Side -------- */}
      <div className="md:basis-[50%] flex self-stretch">
        <img
          src={assets.header_img}
          alt=""
          className="
            w-full max-w-full
            object-contain
            self-end
            drop-shadow-[0_18px_30px_rgba(0,0,0,0.15)]
          "
        />
      </div>
    </div>
  )
}

export default Header

