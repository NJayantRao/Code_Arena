import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProblemsPage from './pages/ProblemsPage'
import Dashboard from './pages/Dashboard'
import { useUser } from '@clerk/clerk-react'
import ProblemPage from './pages/ProblemPage'
import { Toaster } from 'react-hot-toast'

const App = () => {
const {isSignedIn,isLoaded}= useUser()
if(!isLoaded) return null
  return (
    <div>
    <Toaster/>
    <Routes>
      <Route path='/' element={isSignedIn?<Dashboard />:<Home />} />
      <Route path='/problems' element={!isSignedIn?<Home />:<ProblemsPage />} />
      <Route path='/problem/:id' element={!isSignedIn?<Home />:<ProblemPage />} />
      <Route path='/dashboard' element={!isSignedIn?<Home />:<Dashboard />} />
    </Routes>
    </div>
  )
}

export default App