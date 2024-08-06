import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Importing Navbar component
import LoginPage from './LoginPage';
import ProfilePage from './Profile';

const App = () => {
  return (
    <div>
      <Navbar /> {/* Adding Navbar here */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
