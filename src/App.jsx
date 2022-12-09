import React from 'react'
import { Route , Routes } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
  )
}

export default App