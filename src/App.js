import React, { Component } from 'react';
import './Assets/Css/App.css';
import Connetion from './Views/Connection';
import Header from './Components/Header';

class App extends Component {
  render(){
      return (
        <div className="App">
          <Header/>
          <Connetion/>
        </div>
      );
  }
}

export default App;
