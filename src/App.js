import React, { Component } from 'react';
import './Assets/Css/App.css';
import Connetion from './Views/Connection';
import Profil from './Views/Profil';
import Header from './Components/Header';

class App extends Component {
  constructor(props){
    super(props)

     this.state = {
       sessionToken : null,
       userInformations : null
     }
  }

  storeUserInformations = (dataUser) => {
    this.setState({sessionToken : dataUser})
  }

  render(){
    const userSession = JSON.parse(sessionStorage.getItem('userData'));
      return (
        <div className="App">
          <Header/>
          {userSession === null || userSession === undefined ? <Connetion
            storeUserInformations={this.storeUserInformations}
          /> : <Profil/>}
        </div>
      );
  }
}

export default App;
