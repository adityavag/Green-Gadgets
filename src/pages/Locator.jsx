import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
import locateImage from '../assets/Images/locate.png'
import locationData from '../../api/output.json'
import NewsCard from '../components/NewsCard'
import Footer from '../components/Footer'

export default function Locator() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  function getCurrentLocation() {
    var latitude;
    var longitude;
    navigator.geolocation.getCurrentPosition(function (position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      console.log("Latitude : ", latitude, "Longitude : ", longitude);
      setLat(latitude);
      setLong(longitude);
    });

    axios({
      method: 'post',
      url: 'http://localhost:3001',
      data: {
        lat: latitude,
        long: longitude
      }
    });
    console.log(locationData[1].Address)
  }

  return (
    <div className=''>
      <Navbar />
      <div className='p-8 grid grid-cols-2 max-lg:grid-cols-1 font-montserrat'>
        <div>
          <p className='text-6xl font-semibold grid grid-row-3 mb-16'>Locate Recycling Facility</p>
          <p className='text-[1.2rem]'>Locate the closest E-Waste recycling facility effortlessly. Your eco-friendly journey starts here. Discover responsible disposal options near you.</p>
          <Link to="/locator"><button className='bg-[#014558] text-white rounded-md font-bold px-8 py-2 mt-12 ' onClick={getCurrentLocation}>Facilities Near Me</button></Link>
        </div>
        <img src={locateImage} className=' max-lg:mt-8 max-lg:mx-auto' />
      </div>
      <div className='mt-24 mx-auto'>
        <div className='grid grid-cols-2 max-lg:grid-cols-1 p-8'>
          <iframe src='api\index.html' width={400} height={400} className='border-2 border-black'></iframe>
          <div className=''>
            <div className='grid grid-row-4 gap-3 p-10 bg-[#014558] text-white'>
              <ul className=''>
                <li className='px-4 py-4 my-1'>{locationData[0].Address}</li>
                <li className='px-4 py-4 my-1'>{locationData[1].Address}</li>
                <li className='px-4 py-4 my-1'>{locationData[2].Address}</li>
                <li className='px-4 py-4 my-1'>{locationData[3].Address}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
