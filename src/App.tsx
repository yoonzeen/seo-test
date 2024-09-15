import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './home';
import IntroPage from './intro';
import HobbyPage from './intro/hobby';
import ProfilePage from './profile';
import MetaTag from './common/MetaTag';

function App() {
  return (
    <BrowserRouter >
      <MetaTag title={'yoonzeen'} descrition={'yoonzeen home page 입니다'} imgsrc={'https://github.com/yoonzeen/seo-test/blob/master/public/og.jpg'} url={'https://yoonzeen-seo-test.netlify.app/'} />
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
