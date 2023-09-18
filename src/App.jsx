import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from '../src/pages/Landing'
import Locator from '../src/pages/Locator'
import News from '../src/pages/News'
import Recycle from './pages/Recycle';
import About from './pages/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>} />
        <Route path="/locator" element={<Locator />} ></Route>
        <Route path="/news" element={<News />} ></Route>
        <Route path="/recycle" element={<Recycle />} ></Route>
        <Route path="/about" element={<About />} ></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </>
  )
}
