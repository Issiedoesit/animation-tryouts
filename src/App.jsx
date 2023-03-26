import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Demo from './Demo'
import './App.css'
import Home from './components/Home/Home'
import TOne from './components/TryOuts/TOne'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/tryouts" >
          <Route path="" element={<TOne />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
