import React from "react";

const Tab = ({ label, isActive, onClick }) => {
  return (
    <>
      <button className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Tab;
