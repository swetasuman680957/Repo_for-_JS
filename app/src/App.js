// CREATE A REACT COMPONENT CALLED APP THAT HAS ROUTES TO THE FOLLOWING COMPONENTS:
// 1. Home
// 2. LOGIN
// 3. REGISTER
// USE THE react-router-dom 6 LIBRARY TO CREATE THE ROUTES

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;