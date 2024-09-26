import React from "react";
import './Card.css';

const Card = (props) => {
  const { title, description, image } = props;

  return (
    <>
      <div className="card">
        <img src="{image}" alt="Card Image" className="card-img" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
