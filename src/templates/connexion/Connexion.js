import { React, useState } from "react";
import './style.css';
import TrainingList from "../trainingList/TrainingList";
import userId from "../../myInitObject";
import { Link } from "react-router-dom";

function Connexion() {
  // React States
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const response = await fetch('http://localhost:3001/users/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({identifiant: uname.value, mdp: pass.value})
    });

    console.log(response);

    if (await response.status !== 200) {
      // You can do your error handling here
      const erreur = await response.json()
      console.log(erreur)
      window.alert(JSON.stringify(erreur.message));
    } else {
        // Call the .json() method on your response to get your JSON data
        const jsonResponse = await response.json();
        // Set userId to the number found
        userId.setUserId(jsonResponse.idUser);
        setIsSubmitted(true);
    }
  };


  // JSX code for login form
  const renderForm = (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
              </div>
              <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
              <div>
                <Link to="/register">S'inscrire</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
  );

  return (
    <div>        
      {isSubmitted ? <TrainingList /> : renderForm} 
    </div>
  );
}

export default Connexion;