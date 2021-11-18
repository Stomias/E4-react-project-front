import { Component } from 'react';
import Connexion from './templates/connexion/Connexion';
import Header from './templates/header/Header';



const App = () => {
  return (
    <div className="form-style">
      <Header />
      <Connexion />
    </div>

  );
}

export default App;
