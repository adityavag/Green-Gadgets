import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import $ from 'jquery';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Recycle() {
  const [deviceWeight, setDeviceWeight] = useState('');
  // const [result, setResult] = useState(null);

  const generateScore = () => {
    console.log($("#weight").val())
    setWeight($("#weight").val())
    axios({
      method: 'post',
      url: 'http://localhost:3001/mobile',
      data: {
        weight: deviceWeight
      }
    });
  }
  return (
    <div className=''>
      <Navbar />
      <div className='p-8 grid grid-cols-2 max-lg:grid-cols-1 font-montserrat'>
        <div>
          <p className='text-6xl font-semibold grid grid-row-3 mb-8'>Waste to Wealth.</p>
          <p className='text-[1.2rem]'>Join the E-waste recycling movement and accumulate credit points as you responsibly dispose of electronics, boosting sustainability efforts.</p>
          <div className='flex flex-col mt-6'>
            <span className=''>Gold - 0</span>
            <span className=''>Silver - 0gm</span>
            <span className=''>Aluminium - 0gm</span>
          </div>
        </div>
        <form className='max-lg:mt-16'>
          <label for="devType" class="block text-gray-700 text-sm font-bold mb-2">Device Type</label>
          <select name="devType" id="devType" class="w-full p-2 border border-gray-700 shadow-sm mb-4">
            <option value="laptop">Laptop</option>
            <option value="mobile">Mobile</option>
            <option value="television">Television</option>
          </select> 

          <label for="devType" class="block text-gray-700 text-sm font-bold mb-2">Weight</label>
          <input
            aria-label="Weight"
            id="weight"
            type="number" placeholder="Weight (Grams)"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-700 mb-2" />
          <button onClick={generateScore}
            className="bg-[#A8D27C] rounded-md font-bold px-8 py-2 mt-10">
            Check Score
          </button>
        </form>
      </div>
    </div>
  )
}
