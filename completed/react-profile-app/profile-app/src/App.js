// src/App.js
import React, { useState } from 'react';
import './App.css';
import ProfileHeader from './components/ProfileHeader';
import ProfileDetails from './components/ProfileDetails';
import EditProfile from './components/EditProfile';

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Pawan Maurya',
    bio: 'Frontend Developer',
    avatar: 'https://via.placeholder.com/150',
    location: 'Lucknow, India',
    profession: 'Software Engineer',
    skills: ['JavaScript', 'React', 'CSS', 'HTML'],
    email: 'pawan@gmail.com',
  });

  const handleSave = (updatedProfile) => {
    setProfile(updatedProfile);
    setIsEditing(false);
  };

  return (
    <div className="App">
      <div className="profile-container">
        {isEditing ? (
          <EditProfile {...profile} onSave={handleSave} />
        ) : (
          <>
            <ProfileHeader name={profile.name} bio={profile.bio} avatar={profile.avatar} />
            <ProfileDetails
              location={profile.location}
              profession={profile.profession}
              skills={profile.skills}
              email={profile.email}
            />
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
