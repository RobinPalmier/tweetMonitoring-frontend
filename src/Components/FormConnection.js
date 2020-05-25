import React from 'react';
import Notification from './Notification';

function formConnection (props) {
      return (
        <form onSubmit={(e)=>props.submitForm(e, "connexion")}>
          <label>Connexion</label>
          {props.connectionMessage !== null ? <Notification message={props.connectionMessage} status={props.connectionMessageStatus}/> :""}
          <input type="email" value={props.inputValues.email} placeholder="Email" onChange={(e) => props.changeInputValue(e, "connexion", "email")}/>
          <input type="password" value={props.inputValues.password} placeholder="Mot de passe" onChange={(e) => props.changeInputValue(e, "connexion", "password")}/>
          <input type="submit" value="Se connecter"/>
        </form>
    );
}

export default formConnection;
