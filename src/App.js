import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Signup from './signup';
import Login from './login';
import ViewPoints from './viewpoints';
import JoinLeague from './joinleague';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <h1 className="welcome">Welcome to the Home of Gamers!</h1>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/points" element={<ViewPoints />} />
            <Route path="/join-league" element={<JoinLeague />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
