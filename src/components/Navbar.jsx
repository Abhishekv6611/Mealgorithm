import { SignedIn, SignInButton, UserButton } from '@clerk/clerk-react'

function Navbar() {
    
    return (
        <>
    <div className='w-full h-9 '>
        <div className='flex justify-end px-8 py-1 '>
       {<SignedIn/>?<UserButton/>:<SignInButton />}
        </div>
    </div>
            <hr />
      
    </>
  )
}

export default Navbar
