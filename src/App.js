import React from 'react';
import { About } from './Components/About';
import { Feature } from './Components/Feature';
import { Header } from './Components/Header';
import { NavBar } from './Components/NavBar';
import { Offer } from './Components/Offer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Feature />
      <Offer />
      <About />
    </div>
  );
}

export default App;
