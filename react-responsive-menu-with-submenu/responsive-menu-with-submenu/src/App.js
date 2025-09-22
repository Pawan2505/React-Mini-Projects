import React from 'react';
import Navbar from './components/Navbar';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Responsive Menu with Submenu</h1>
        <p>This is a simple responsive menu with a submenu built using ReactJS.</p>
      </div>
    </div>
  );
}

export default App;
