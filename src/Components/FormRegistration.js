import React from 'react';

function formConnection () {
      return (
        <form>
          <label>Inscription</label>
          <input type="text" placeholder="Nom" />
          <input type="password" placeholder="Prenom"/>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mot de passe"/>
          <input type="submit" placeholder="S'inscrire"/>
        </form>
    );
}

export default formConnection;
