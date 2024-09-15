import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './home';
import IntroPage from './intro';
import HobbyPage from './intro/hobby';
import ProfilePage from './profile';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/intro">
          <Route path="" element={<IntroPage/>}/>
          <Route path="hobby" element={<HobbyPage/>}/>
        </Route>
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
