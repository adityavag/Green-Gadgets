import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import $ from 'jquery';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import dustbin from '../assets/Images/last.png'


export default function Recycle() {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    "weight": 0
  });

  const [receivedData, setReceviedData] = useState();

  const setWeight = (e) => {
    setFormData((prev) => {
      return ({ ...prev, weight: e.target.value })
    })
  }

  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const data = {
      weight: formData.weight
    }
    await setTimeout(5000); 
    console.log(data);
    const res = await axios.post("https://greeapi.onrender.com/api", data);
    setReceviedData(res.data);
    setLoading(false);
    console.log(data);
  }

  return (
    <div className=''>
      <Navbar />
      <div className='p-8 grid grid-cols-2 max-lg:grid-cols-1 font-montserrat ml-40 max-lg:ml-0'>
        <div>
          <p className='text-6xl font-semibold grid grid-row-3 mb-8'>Waste to Wealth</p>
          <p className='text-[1.2rem]'>Join the E-waste recycling movement and accumulate credit points as you responsibly dispose of electronics, boosting sustainability efforts.</p>
          <div>

            <form className='form' onSubmit={handleSubmit}>
              <label for="devType" class="block text-gray-700 text-sm font-bold mb-2">Device Type</label>
              <select name="devType" id="devType" class="w-full p-2 border border-gray-700 shadow-sm mb-4">
                <option value="laptop">Laptop</option>
                <option value="mobile">Mobile</option>
              </select>
              <label for="screenSize" class="block text-gray-700 text-sm font-bold mb-2">Screen Size</label>
              <select name="screenSize" id="screenSize" class="w-full p-2 border border-gray-700 shadow-sm mb-4">
                <option value="5">5.5' - 6.5'</option>
                <option value="10">10' - 12'</option>
                <option value="13">13.4' - 17'</option>
              </select>
              <label for="capacity" class="block text-gray-700 text-sm font-bold mb-2">Battery</label>
              <select name="capacity" id="capacity" class="w-full p-2 border border-gray-700 shadow-sm mb-4">
                <option value="5">3,000 mAh to 5,000 mAh</option>
                <option value="10">6,000 mAh to 10,000 mAh </option>
                <option value="13">2,000 mAh to 30,000 mAh</option>
              </select>
              <label for="" class="block text-gray-700 text-sm font-bold mb-2">Weight</label>
              <input placeholder="Weight (Grams)" name="tip" id="first" type="float" step="0.1" class="validate text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-700 mb-2" onChange={setWeight}></input>
              {/* <h1>Weight</h1>
              <input type="number" className='input border-2 p-1' onChange={setWeight}></input> */}
              <button className='button bg-black text-white rounded-md font-bold text-xl px-8 py-4 mt-10' type='submit'>Check Your Score</button>
              <div>
                {
                  loading ?
                    <div>Calculating Your Device Score .....</div>
                    :
                    receivedData ?
                      <div>
                        {Object.keys(receivedData).map((key) => (
                          <div className='text-gray-700 text-sm font-bold mb-2' key={key}>{key}: {receivedData[key]}
                          </div>
                        ))}
                      </div> : <div></div>
                }
              </div>
            </form>
          </div>
        </div>
        <div>
          <img src={dustbin} />
        </div>
      </div>
    </div>
  )
}
