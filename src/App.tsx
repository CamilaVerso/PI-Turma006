import React from 'react';

import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Router from './routes/Router';

function App() {
  return (
    <div>
      <Header/>

      <Router/>
      
      <Footer/>
    </div >
  );
}

export default App;
