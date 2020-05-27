import React, { Component } from 'react';
import './Assets/Css/App.css';
import Connetion from './Views/Connection';
import Profil from './Views/Profil';
import UserTweet from './Views/UserTweet';
import TweetMonitoring from './Views/TweetMonitoring';
import Header from './Components/Header';
import Nav from './Components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
          <Router>
            <Switch>
              <Route path="/tweet-monitoring">
                <main>
                  { userSession === null || userSession === undefined ? <Connetion
                      storeUserInformations={this.storeUserInformations}
                    /> : <main>
                      <Nav/>
                      <TweetMonitoring />
                    </main>
                  }

                </main>
              </Route>
              <Route path="/user-tweets">
                {userSession === null || userSession === undefined ? <Connetion
                  storeUserInformations={this.storeUserInformations}
                /> : <main>
                    <Nav/>
                    <UserTweet/>
                  </main>
                }
              </Route>
              <Route path="/">
                {userSession === null || userSession === undefined ? <Connetion
                  storeUserInformations={this.storeUserInformations}
                /> : <main>
                        <Nav/>
                        <Profil/>
                     </main>
                }
              </Route>
            </Switch>
          </Router>
        </div>
      );
  }
}

export default App;
