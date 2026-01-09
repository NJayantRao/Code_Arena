import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import React from 'react'

const App = () => {
  return (
    <div className='flex'>
      <h1>Hello to CodeArena</h1>
      <SignedOut>
      <SignInButton mode='modal'/>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      <UserButton />
      </SignedIn>

    </div>
  )
}

export default App