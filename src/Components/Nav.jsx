import React from 'react';
import {Link} from "react-router-dom";

function Nav () {
      return (
        <nav>
          <ul>
            <div>
              <li>
               <Link to="/">Profil</Link>
              </li>
              <li>
               <Link to="/user-tweets">Mes Tweets</Link>
              </li>
              <li>
               <Link to="/tweet-monitoring">Monitoring des mots clés</Link>
              </li>
              </div>
              <button
                onClick={()=>{sessionStorage.clear(); window.location.reload();}}
              >
                Déconexion
              </button>
          </ul>
        </nav>
    );
}

export default Nav;
