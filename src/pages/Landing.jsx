import React from 'react'
import Navbar from '../components/Navbar'
import land from '../assets/Images/landing.png'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import News from './News'
export default function Landing() {
  return (
    <div className=''>
      <Navbar />
      <div className='p-8 grid grid-cols-2 max-lg:grid-cols-1 font-montserrat mt-12 min-h-screen'>
        <div>
          <p className='text-6xl font-semibold grid grid-row-3 mb-16'>Recycling today for a Sustainable,<span className='text-[#A8D27C] inline'>Greener</span> Tomorrow.</p>
          <p className='text-[1.2rem]'>Connecting tech enthusiasts with eco-conscious choices. Locate e-waste facilities, learn about environmental impact, and earn rewards for responsible disposal. Together, let's make tech sustainable.</p>
          <Link to="/locator"><button className='bg-[#A8D27C] rounded-md font-bold px-8 py-2 mt-20'>Recycle</button></Link>
        </div>
        <img src={land} className='ml-8 max-lg:mt-8 max-lg:mx-auto' />
      </div>
      <div className='bg-[#A8D27C] rounded-t-xl'>
        <p className='text-center font-montserrat pt-4 text-2xl max-lg:text-xl max-sm:text-xl text-[#014558] font-bold'>Stay Informed on the latest E-Waste News</p>
        <News />
      </div>
    </div>
  )
}
