import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './Pages/Signup'
import { Login } from './Pages/Login'
import { Home } from './Pages/Home'
import './App.css'
import { ShowDetails } from './Pages/ShowDetails'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={< Login/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/ShowDetails/:id' element={<ShowDetails />} />
      </Routes>
    </div>
  )
}

export default App
