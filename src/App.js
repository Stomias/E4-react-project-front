import Connexion from './templates/connexion/Connexion';
import Header from './templates/header/Header';
import Footer from './templates/footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TrainingList from './templates/trainingList/TrainingList';
import TrainingDetail from './templates/trainingDetail/TrainingDetail';
import Inscription from './templates/inscription/Inscription';


const App = () => {
  return (
    <Router>
      <div className="form-style">
        <Header />
        <Routes>
          <Route path="/login" element={<Connexion/>}/>
          <Route path="/register" element={<Inscription/>}/>
          <Route path="/training-list" element={<TrainingList/>}/>
          <Route path="/training-detail/:idEntrainement" element={<TrainingDetail/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
