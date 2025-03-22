import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Home from '../components/Home'
import Loading from '../components/Loading'

const Navroutes = () => {
  return (
    <Routes>
 
      <Route path="/" element={<Home />} />
      <Route path='/loading' element={<Loading/>}/>
    </Routes>
  )
}

export default Navroutes