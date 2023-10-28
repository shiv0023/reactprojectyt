import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import ModifiedForm from './components/ModifiedForm'
import ReactProject1 from './components/ReactProject1'
import Home from './components/Home'

const MyRoute = () => {
  return (
    <div>
      <Routes>
        <Route index element={<div><Home/></div>} />
        <Route path="/form" element={<div><Form/></div>} />
        <Route path="/Modified" element={<div><ModifiedForm/></div>} />
        <Route path="/reactproject" element={<div><ReactProject1/></div>} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </div>
  )
}

export default MyRoute
