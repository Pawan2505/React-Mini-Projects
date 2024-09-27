import React from 'react'

const ProfileHeader = ({name, bio, avatar}) => {
  return (
    <>
      <div className="profile-header">
        <img src={avatar} alt="profile" className='profile-avatar' />
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
    </>
  )
}

export default ProfileHeader
