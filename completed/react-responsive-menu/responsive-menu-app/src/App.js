import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <section id="home">
          <h1>Home</h1>
          <p>Welcome to the homepage!</p>
        </section>
        <section id="about">
          <h1>About</h1>
          <p>This is the about section.</p>
        </section>
        <section id="services">
          <h1>Services</h1>
          <p>We offer amazing services.</p>
        </section>
        <section id="contact">
          <h1>Contact</h1>
          <p>Contact us for more information.</p>
        </section>
      </div>
    </div>
  );
}

export default App;
