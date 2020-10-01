import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__row">
          <div className="app__sidebar">
            <Sidebar />
          </div>
          <div className="app__main">My main content</div>
        </div>
      </div>


    </div>
  );
}

export default App;
