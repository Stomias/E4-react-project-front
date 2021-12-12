// import { Component } from 'react';
import Connexion from './templates/connexion/Connexion';
//import Inscription from './templates/inscription/Inscription';
import Header from './templates/header/Header';
import Footer from './templates/footer/Footer';
// import TrainingList from './templates/trainingList/TrainingList';
import TrainingCreation from './templates/trainingCreation/TrainingCreation';


const App = () => {
  return (
    <div className="form-style">
      <Header />
      <TrainingCreation />
      <Footer />
    </div>

  );
}

export default App;
