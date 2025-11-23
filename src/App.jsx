import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Component/NavBar';
import Login from './Pages/Login'
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import MainPage from './Pages/MainPage';
import Explore from './Pages/Explore';

function App() {
  return (
    <>
      <NavBar />
      <div className="pt-16">
        <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
