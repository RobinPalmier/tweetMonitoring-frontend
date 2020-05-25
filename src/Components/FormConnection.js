import React from 'react';

function formConnection (props) {
      return (
        <form onSubmit={props.submitForm}>
          <label>Connexion</label>
          <input type="email" placeholder="Email" onChange={props.changeInputValue}/>
          <input type="password" placeholder="Mot de passe" onChange={(e) => props.changeInputValue(e, "connexion", "password")}/>
          <input type="submit" placeholder="Se connecter"/>
        </form>
    );
}

export default formConnection;
