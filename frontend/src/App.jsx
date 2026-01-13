import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProblemsPage from './pages/ProblemsPage'
import Dashboard from './pages/Dashboard'
import { useUser } from '@clerk/clerk-react'

const App = () => {
const {isSignedIn,isLoaded}= useUser()
if(!isLoaded) return null
  return (
    <Routes>
      <Route path='/' element={isSignedIn?<Dashboard />:<Home />} />
      <Route path='/problems' element={!isSignedIn?<Home />:<ProblemsPage />} />
      <Route path='/dashboard' element={!isSignedIn?<Home />:<Dashboard />} />
    </Routes>
  )
}

export default App