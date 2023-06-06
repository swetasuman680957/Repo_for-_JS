// create a react component called Home that returns a full page div with two buttons as follows:
// 1. LOGIN - WHEN CLICKED, THE USER SHOULD BE TAKEN TO THE LOGIN PAGE
// 2. REGISTER - WHEN CLICKED, THE USER SHOULD BE TAKEN TO THE REGISTER PAGE
// COMPONENT SHOULD USE bootstrap 4 CLASSES TO STYLE THE BUTTONS
// BUTTONS SHOULD BE CENTER ALIGNED
// PAGE SHOULD HAVE A APPARELL STORE BACKGROUND IMAGE FROM URL '/banner.jpg'
// BUTTONS SHOULD BE PLACED AT 50% BOTTOM OF THE PAGE
// PAGE SHOULD HAVE A HEADING AT THE TOP WITH TEXT WELCOME TO APPARELL STORE
// USE THE react-router-dom 6 LIBRARY FOR NAVIGATION

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ backgroundImage: "url('/banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', textAlign: 'center' }}>
      <h1 style={{ color: 'white', backgroundColor:'#0069af', padding:'20px' }}>WELCOME TO APPARELL STORE</h1>
      <div style={{ position: 'absolute', bottom: '50%', width: '100%' }}>
        <Link to="/login" className="btn btn-primary btn-lg mx-5">LOGIN</Link>
        <Link to="/register" className="btn btn-secondary btn-lg">REGISTER</Link>
      </div>
    </div>
  );
}

export default Home;
// USE THE react-router-dom 6 LIBRARY FOR NAVIGATION