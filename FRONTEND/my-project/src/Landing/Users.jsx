

import White from "/white.jpg"
 import Man from '/man .jpg'
import Suit from '/suit.jpg'
import Props from './Userprops'

function Users() {
  return (
    <>
  <main className='h-[90vh] w-screen flex justify-center items-center'>
<section className='h-[515px] w-[1239px] bg-gray-200'>
  <div className='h-[364px] w-[1192px] flex flex-col justify-center items-center '>
<p className='text-[36px] font-bold h-[12vh]'>WHAT OUR USERS SAY</p>
<div className='flex justify-evenly w-[1192px] h-[19vh]'>
<Props text="CareKonect made booking my doctor's appointment so easy and stres free. 
I found the perfect specialist in minutes" image={White} name="John Doe" job="HR Manager"/>

  <Props text="Using CareKonect has streamlined my appointment scheduling process,
   allowing me to focus more on patient care" image={Suit} name="Dr. John M." 
   job="General Practitioner" />
<Props text="Thanks to CareKonect, I no longer have to wait on hold to schedule my visits.
 It's a game changer for managing my healthcare" image={Man} name="Michael B." job="HR Manager" />
</div>
  </div>
</section>
  </main>
    </>
  )
}


export default Users