import React, { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import SearchBar from './components/SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  

  const profiles = [
    {
      name: 'Pawan Maurya',
      bio: 'Software Developer',
      location: 'Luknow, India',
      profession: 'Software Engineer',
      avatar: 'https://via.placeholder.com/150'
    },
    {
      name: 'Manish Mishra',
      bio: 'Software Developer',
      location: 'New Delhi, India',
      profession: 'Product Designer',
      avatar: 'https://via.placeholder.com/150'
    },
    {
      name: 'Vivek Mishra',
      bio: 'Backend Developer',
      location: 'New Delhi, India',
      profession: 'Database Engineer',
      avatar: 'https://via.placeholder.com/150'
    }
  ];

  // Filtering logic
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Profile Search App</h1>
      
      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Display Filtered Profiles */}
      <div className="profiles-container">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile, index) => (
            <Profile
              key={index}
              name={profile.name}
              bio={profile.bio}
              location={profile.location}
              profession={profile.profession}
              avatar={profile.avatar}
            />
          ))
        ) : (
          <p>No profiles found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
