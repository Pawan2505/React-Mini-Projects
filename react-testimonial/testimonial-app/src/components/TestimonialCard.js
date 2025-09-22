import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ name, message, image }) => {
  return (
    <>
      <div className="testimonial-card">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="testimonial-image"
        />
        <div className="content">
          <h3 className="testimonial-name">{name}</h3>
          <p className="testimonial-message">{message}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
