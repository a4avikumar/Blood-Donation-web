import { useState } from 'react'
import React from 'react';
import {Routes, Route, Link, Form } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Signinpage} from './pages/Signinpage';
import Home from './pages/Home';
import {Signuppage}  from './pages/Signuppage';
// import { Link } from "react-router-dom";
import Donate from './pages/Donate';
import Ask from './pages/Ask';
import profile from './pages/profile';
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
<Routes>
  <Route path="/home" element={<Home/>}/>
  <Route path="/Ask" element={<Ask/>}/>
  <Route path="/Profile" element={<profile/>}/>
  <Route path="/" element={<Signinpage/>} />
  <Route path="/Signuppage" element={<Signuppage/>} />
  <Route path="/Donate" element={<Donate/>} />
</Routes>
</>
  )
}
export default App
