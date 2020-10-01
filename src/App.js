import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__row">
          <div className="app__sidebar">
            <Sidebar />
          </div>
          <div className="app__main">
            <Navbar />
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
