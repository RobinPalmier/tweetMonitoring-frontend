import React from 'react';

function formConnection (props) {
      return (
        <form onSubmit={(e)=>props.submitForm(e, "registration")}>
          <label>Inscription</label>
          <input
            value={props.inputValues.lastName}
            onChange={(e) => props.changeInputValue(e, "registration", "lastName")}
            type="text"
            placeholder="Nom"
          />
          <input
            value={props.inputValues.firstName}
            onChange={(e) => props.changeInputValue(e, "registration", "firstName")}
            type="text"
            placeholder="Prenom"
          />
          <input
            value={props.inputValues.age}
            onChange={(e) => props.changeInputValue(e, "registration", "age")}
            type="number"
            placeholder="Age"
          />
          <input
            value={props.inputValues.email}
            onChange={(e) => props.changeInputValue(e, "registration", "email")}
            type="email"
            placeholder="Email"
          />
          <input
            value={props.inputValues.password}
            onChange={(e) => props.changeInputValue(e, "registration", "password")}
            type="password"
            placeholder="Mot de passe"
          />
          <input
            type="submit"
            value="S'inscrire"
          />
        </form>
    );
}

export default formConnection;
