import { Component } from 'react';
import Connexion from './templates/connexion/Connexion';
import Inscription from './templates/inscription/Inscription';
import Header from './templates/header/Header';


const App = () => {
  return (
    <div className="form-style">
      <Header />
      <Inscription />
    </div>

  );
}

export default App;
