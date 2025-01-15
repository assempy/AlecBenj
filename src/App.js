import './style.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './header.jsx';
import Main from './main.jsx';
import Footer from './footer.jsx';

import Twelve_notes_albom from './twelve_notes_albom.jsx';
import These_Two_Windows from './these_two_windows_albom.jsx';

import SongPage from './SongPage.jsx';  

function App() {
  return (
    <>
        <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/twelve_notes_albom' element={<Twelve_notes_albom />} />
              <Route path='/these_two_windows_albom' element={<These_Two_Windows />} />
              
              {/* Динамический маршрут для песен */}
              <Route path="/song/:id" element={<SongPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>    
    </>
  );
}

export default App;