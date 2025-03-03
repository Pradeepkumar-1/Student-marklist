import React from 'react'
import profile_photo from '/src/Images/profile_photo.jpg'


function Profile() {
  return (
    <div>
    <div className="h-[100vh]">
        <img src={profile_photo} width="200px" />

    </div>
    <div className="h-[100vh]"></div>
    </div>

  )
}

export default Profile