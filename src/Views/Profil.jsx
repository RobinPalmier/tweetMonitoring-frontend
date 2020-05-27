import React, { Component } from 'react';
import fetchData from '../Functions/FetchData';
import {URL_TWEET, URL_USER_DATA} from '../Constantes/Url'

class Profil extends Component {
  constructor(props){
    super(props)
    this.state = {
      userData : {email : "", firstName : "", lastName:"", age : "", tweeterId : ""}
    }
  }

  componentDidMount(){
    const userSession = JSON.parse(sessionStorage.getItem('userData'));
    fetchData(URL_USER_DATA, 'get', undefined, userSession.token)
    .then((res)=>{
      console.log(res);
      this.setState({userData : res.data});
    })
  }

 render(){
      return (
        <div className="profil">
          <div className="profil-card">
            <p>Prénom : <b>{this.state.userData.firstName}</b></p>
            <p>Nom : <b>{this.state.userData.lastName}</b></p>
            <p>Age : <b>{this.state.userData.age}</b></p>
            <p>E-mail : <b>{this.state.userData.email}</b></p>
            <p>Identifiant tweeter : <b>{this.state.userData.tweeterId === undefined ? "Aucun compte tweeter relié" : this.state.userData.tweeterId}</b></p>
          </div>
          {
            this.state.userData.tweeterId === undefined || this.state.userData.tweeterId === "" ? <form>
              <input type="text" placeholder="identifiant tweeter"/>
              <input type="password"placeholder="mot de passe"/>
              <input type="submit" value="connexion"/>
            </form> : ""
          }

        </div>
      );
  }
}

export default Profil;
