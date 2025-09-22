import React, { useState } from "react";
import Tab from "./Tab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    "Content for Tab 1",
    "Content for Tab 2",
    "Content for Tab 3",
  ];
  return (
    <>
      <div className="tab-header">
        {["Tab 1", "Tab 2", "Tab 3"].map((label, index) => (
          <Tab
            key={index}
            label={label}
            isActive={index === activeTab}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <div className="tab-content">
        <p>{tabContent[activeTab]}</p>
      </div>
    </>
  );
};

export default Tabs;
