import React from 'react';

const Profile = ({ name, bio, location, profession, avatar }) => {
  return (
    <div className="profile-card">
      <img src={avatar} alt={name} className="profile-avatar" />
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>Location: {location}</p>
      <p>Profession: {profession}</p>
    </div>
  );
};

export default Profile;
