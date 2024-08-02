import React from 'react'
import { Routes,Route } from "react-router-dom"
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import Homepage from '../Pages/Homepage'
import PrivateRoute from '../Component/PrivateRoute'
import SearchMovie from '../Pages/SearchMovie'

function MainRoute() {
  return (
   <div>
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/homepage' element={
          <PrivateRoute>
             <Homepage/>
          </PrivateRoute>
          }></Route>
        <Route path='/searchMovie' element={<SearchMovie/>}></Route>
      </Routes>
   </div>
  )
}

export default MainRoute