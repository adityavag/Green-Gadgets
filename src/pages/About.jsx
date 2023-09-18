import React from 'react'
import Navbar from '../components/Navbar'
import Anim from '../assets/lottie/animation_lmoo3hnq.json'
import Lottie from 'lottie-react'
import Footer from '../components/Footer'
import { FaGit, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function About() {
    return (
        <div>
            <Navbar />
            <div className='p-8 grid grid-cols-2 max-lg:grid-cols-1 font-montserrat ml-40 max-lg:ml-0 mt-10'>
                <div>
                    <p className='text-6xl font-semibold grid grid-row-3 mb-8'>About</p>
                    <p className='text-[1.2rem]'>Website that tells you the location of the nearest e-waste
                        collection and recycling facility. Offers educational pop-ups on
                        the harmful components of your e-waste and their effects on
                        the environment and human health if not disposed correctly.
                        There could be an option to input the model of your old device and earn credit points relative to the amount of precious
                        metals recovered from the device if disposed correctly.
                    </p>
                    <p className='text-2xl font-semibold grid grid-row-3 mb-4 mt-8'>Contributors</p>
                    <ul className='text-white text-lg'>
                        <li className='bg-[#014558] p-6 rounded-lg mt-2 flex flex-col'>
                            <span>Aaryaman Bajaj</span>
                            <div className='flex flex-row space-x-4 mt-3'>
                                <a href="https://github.com/Aaryaman3" target='_blank'><FaGithub className='text-white' /></a>
                                <a href="https://www.linkedin.com/in/aaryaman-bajaj-a72a25249/" target='_blank'><FaLinkedin className='text-white' /></a>
                            </div>
                        </li>
                        <li className='bg-[#014558] p-6 rounded-lg mt-2 flex flex-col'>
                            <span>Raghav Khanna</span>
                            <div className='flex flex-row space-x-4 mt-3'>
                                <a href="https://github.com/raghavkhanna12" target='_blank'><FaGithub className='text-white' /></a>
                                <a href="https://www.linkedin.com/in/raghav-khanna-64a480239/" target='_blank'><FaLinkedin className='text-white' /></a>
                            </div>
                        </li>
                        <li className='bg-[#014558] p-6 rounded-lg mt-2 flex flex-col'>
                            <span>Ankit Patra</span>
                            <div className='flex flex-row space-x-4 mt-3'>
                                <a href="https://github.com/Ankit-Patra" target='_blank'><FaGithub className='text-white' target='_blank' /></a>
                                <a href="https://www.linkedin.com/in/ankit-patra-a87145215/" target='_blank'><FaLinkedin className='text-white' /></a>
                            </div>
                        </li>
                        <li className='bg-[#014558] p-6 rounded-lg mt-2 flex flex-col'>
                            <span>Dewashish Dubey</span>
                            <div className='flex flex-row space-x-4 mt-3'>
                                <a href="https://github.com/DewashishDubey" target='_blank'><FaGithub className='text-white' target='_blank' /></a>
                                <a href="https://www.linkedin.com/in/dewashish-dubey/" target='_blank'><FaLinkedin className='text-white' /></a>
                            </div>
                        </li>
                        <li className='bg-[#014558] p-6 rounded-lg mt-2 flex flex-col'>
                            <span>Aditya Vardhan Agarwal</span>
                            <div className='flex flex-row space-x-4 mt-3'>
                                <a href="https://github.com/adityavag" target='_blank'><FaGithub className='text-white' /></a>
                                <a href="https://www.linkedin.com/in/adityacse" target='_blank'><FaLinkedin className='text-white' /></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <Lottie animationData={Anim} loop={true} className='mx-auto max-lg:hidden' />
            </div>
        </div>
    )
}
