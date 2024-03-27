import './App.css';
import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import About from './Pages/About'
import Products from './Pages/Products';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          {/* <Route path='/services' element={<Services />} /> */}
          {/* <Route path='/sign-up' element={<SignUp />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
