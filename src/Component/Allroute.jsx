import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'

function AllRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default AllRoute
