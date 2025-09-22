import React from "react";

const ProfileDetails = ({ location, profession, skills, email }) => {
  return (
    <>
      <div className="profile-details">
        <h3>Location : {location}</h3>
        <h3>Profession : {profession}</h3>
        <h3>Skills : </h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <h3>Email : {email}</h3>
      </div>
    </>
  );
};

export default ProfileDetails;
