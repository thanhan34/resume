import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import { AnimatePresence } from 'framer-motion'

function App() {

  return (
    <Router>
      <div className="app">
        <div className="app__container">
          <div className="app__row">
            <div className="app__sidebar">
              <Sidebar />
            </div>
            <div className="app__main">
              <Navbar />
              <AnimatePresence>
                <Switch >
                  <Route exact path="/">
                    <About />
                  </Route>
                  <Route path="/resume">
                    <Resume />
                  </Route>
                  <Route path="/projects">
                    <Projects />
                  </Route>
                  <Route>
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </AnimatePresence>


            </div>
          </div>
        </div>


      </div>
    </Router>

  );
}

export default App;
