import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<Main />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/skills" element={<Skills />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
