import React from 'react'
import Book  from'../Landing/Books'
import Nurse from '../Landing/Nurse'
import Offer from '../Landing/Offer'
import Provide from '../Landing/Provide'
import Users from '../Landing/Users'
import Mission from '../Landing/Mission'

function Home() {
  return (
    <main className='max-w-full overflow-x-hidden'>
<Book/>
<Nurse/>
<Offer/>
<Mission/>
<Users/>
<Provide/>
    </main>
  )
}

export default Home