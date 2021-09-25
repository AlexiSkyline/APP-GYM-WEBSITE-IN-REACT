import React from 'react';
import { Feature } from './Components/Feature';
import { Header } from './Components/Header';
import { NavBar } from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Feature />
    </div>
  );
}

export default App;
