import React, { Component } from 'react';
import fetchData from '../Functions/FetchData';
import {URL_USER_DATA, URL_UPDATE_USER_DATA} from '../Constantes/Url'

class Profil extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue : ""
    }
  }

  componentDidMount(){
    const userSession = JSON.parse(sessionStorage.getItem('userData'));
    fetchData(URL_USER_DATA, 'get', undefined, userSession.token)
    .then((res)=>{
      this.props.storeUserInformations(res.data)
    })
  }

  updateInputValue = (e) => {
    this.setState({inputValue : e.target.value})
  }

  submitForm = (e) => {
    e.preventDefault();
    if (this.state.inputValue.length > 0) {
      const userSession = JSON.parse(sessionStorage.getItem('userData'));
      fetchData(URL_UPDATE_USER_DATA + this.props.userData._id, 'put', {twitterScreenName : this.state.inputValue}, userSession.token)
      .then((res)=>{
        console.log(res);
        return fetchData(URL_USER_DATA, 'get', undefined, userSession.token)
      })
      .then((res)=>{
        console.log(res);
        this.props.storeUserInformations(res.data)
      })
    }
    else {
      alert('Erreur : Veuillez remplir le formulaires correctement')
    }

  }

 render(){
      return (
        <div className="profil">
          <div className="profil-card">
            <p>Prénom : <b>{this.props.userData.firstName}</b></p>
            <p>Nom : <b>{this.props.userData.lastName}</b></p>
            <p>Age : <b>{this.props.userData.age}</b></p>
            <p>E-mail : <b>{this.props.userData.email}</b></p>
            <p>Identifiant tweeter : <b>{this.props.userData.twitterScreenName === "" ? "Aucun compte tweeter relié" : this.props.userData.twitterScreenName}</b></p>
          </div>
          {
            this.props.userData.twitterScreenName === undefined || this.props.userData.twitterScreenName === "" ? <form onSubmit={this.submitForm}>
              <input
                type="text"
                placeholder="identifiant tweeter"
                value={this.state.inputValue}
                onChange={this.updateInputValue}
              />
              <input type="submit" value="Ajouter"/>
            </form> : ""
          }

        </div>
      );
  }
}

export default Profil;
