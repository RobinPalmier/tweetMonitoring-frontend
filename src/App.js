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
       userInformations : {email : "", firstName : "", lastName:"", age : "", twitterScreenName : ""}
     }
  }

  storeUserSession = (dataUser) => {
    this.setState({sessionToken : dataUser})
  }

  storeUserInformations = (dataUser) => {
    this.setState({userInformations : dataUser})
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
                      storeUserSession={this.storeUserSession}
                    /> : <main>
                      <Nav/>
                      <TweetMonitoring
                        userInformations={this.state.userInformations}
                      />
                    </main>
                  }

                </main>
              </Route>
              <Route path="/user-tweets">
                {userSession === null || userSession === undefined ? <Connetion
                  storeUserSession={this.storeUserSession}
                /> : <main>
                    <Nav/>
                    <UserTweet
                      userData={this.state.userInformations}
                    />
                  </main>
                }
              </Route>
              <Route path="/">
                {userSession === null || userSession === undefined ? <Connetion
                  storeUserSession={this.storeUserSession}
                /> : <main>
                        <Nav/>
                        <Profil
                          storeUserInformations={this.storeUserInformations}
                          userData={this.state.userInformations}
                        />
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
