import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import IntroPage from './pages/intro';
import HobbyPage from './pages/intro/hobby';
import ProfilePage from './pages/profile';
import CategoryPage from './pages/category';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/intro">
          <Route path="" element={<IntroPage/>} />
          <Route path="hobby" element={<HobbyPage/>}/>
        </Route>
        <Route path="/category">
          <Route path=":id" element={<CategoryPage />} />
        </Route>
        <Route path="/profile/:id" element={<ProfilePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
