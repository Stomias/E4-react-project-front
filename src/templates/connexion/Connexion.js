import { React, useState } from "react";
// import ReactDOM from "react-dom";

import './style.css';

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

    /*
    - vérifier qu'il ne s'agit pas d'une erreur 404
    - Si 404 un message est associé ---> l'afficher à l'utilisateur
    - Sinon utilisateur bon ---> connexion à la page d'entrainements
    */

    if (await response.status !== 200) {
      // You can do your error handling here
      const erreur = await response.json()
      console.log(erreur)
      window.alert(JSON.stringify(erreur.message));
    } else {
        // Call the .json() method on your response to get your JSON data
        setIsSubmitted(true);
        console.log(await response.json());
    }
  };


  // JSX code for login form
  const renderForm = (
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
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        {/* {renderForm} */}
      </div>
    </div>
  );
}

export default Connexion;