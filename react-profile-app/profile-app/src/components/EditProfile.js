// src/EditProfile.js
import React, { useState } from 'react';

const EditProfile = ({ name, bio, location, profession, email, skills, onSave }) => {
  const [formData, setFormData] = useState({ name, bio, location, profession, email, skills });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSkillsChange = (e, index) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = e.target.value;
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form className="edit-profile-form" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      
      <label>Bio:</label>
      <input type="text" name="bio" value={formData.bio} onChange={handleInputChange} />
      
      <label>Location:</label>
      <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
      
      <label>Profession:</label>
      <input type="text" name="profession" value={formData.profession} onChange={handleInputChange} />
      
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      
      <label>Skills:</label>
      {formData.skills.map((skill, index) => (
        <input key={index} type="text" value={skill} onChange={(e) => handleSkillsChange(e, index)} />
      ))}

      <button type="submit">Save Profile</button>
    </form>
  );
};

export default EditProfile;
