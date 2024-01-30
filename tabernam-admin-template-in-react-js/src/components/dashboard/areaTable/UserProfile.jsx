import React from 'react'
import './UserProfile.css'
import facebook from '../../../assets/images/facebook.png'
import instagram from '../../../assets/images/instagram.png'
import twitter from '../../../assets/images/twitter.png'
import media from '../../../assets/images/media.png'

const UserProfile = () => {
  return (

<div className="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100" id="parent-profile">
	<img src={media} alt="" className="  h-64 rounded-sm sm:h-96 dark:bg-gray-500 " />
	<div className='items-list'>
		<h2 className="text-xl font-semibold">John Doe</h2>
		<span className="block pb-2 text-sm dark:text-gray-400"> CEO</span>
        <div className='social-icons'>
     <img src={facebook} alt=''/>
         <img src={instagram} alt=''/>
         <img src={twitter} alt=''/>
     </div>

	</div>
</div>
  )
}

export default UserProfile