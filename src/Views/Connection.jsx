import React, { Component } from 'react';
import FormConnection from '../Components/FormConnection';
import FormRegistration from '../Components/FormRegistration';
import {URL_CREATE_USER} from '../Constantes/Url';
import {URL_USER_CONNEXION} from '../Constantes/Url';
import fetchData from '../Functions/FetchData';

class Connection extends Component {
  constructor(props){
    super(props)
    this.state = {
      connexionFormValues : {email : "", password : ""},
      registrationFormValues : {firstName:"", lastName:"", age:"", twitterScreenName:"", email:"", password:""},
      connectionMessage : null,
      connectionMessageStatus : null,
      registrationMessage :null,
      registrationMessageStatus :null
    }
  }

  send = (e, formType) => {
    e.preventDefault();
    if (formType === "connexion") {
      let email = this.state.connexionFormValues.email;
      let password = this.state.connexionFormValues.password;
      if (email !== "" && password !== "") {
        fetchData(URL_USER_CONNEXION, "Post", this.state.connexionFormValues)
        .then(data => {
          const stringifiedUserData = JSON.stringify(data.data);
          sessionStorage.setItem('userData', stringifiedUserData);
          this.props.storeUserSession(data.data.token);
          this.setState({connectionMessageStatus: null, connectionMessageStatus : null, registrationMessage:null, registrationMessageStatus:null});
        })
      }
      else {
        this.setState({connectionMessage: "Veuillez remplir tous les champs.", connectionMessageStatus : "false"})
      }
    }
    else {
      let firstName = this.state.registrationFormValues.firstName;
      let lastName = this.state.registrationFormValues.lastName;
      let age = this.state.registrationFormValues.age;
      let email = this.state.registrationFormValues.email;
      let password = this.state.registrationFormValues.password;
      if (firstName !== "" && lastName !== "" && age !== "" && email !== "" && password !== "") {
          fetchData(URL_CREATE_USER, "post", this.state.registrationFormValues)
          .then((res)=>{
            this.setState({registrationMessage:"Inscription réussie, veuillez vous connecter.", registrationMessageStatus:true});
          })
      }
      else {
        this.setState({registrationMessage: "Veuillez remplir tous les champs.", registrationMessageStatus : "false"})
      }
    }
  }

  changeInputValue = (e, formType, fields) => {
    if (formType === "connexion") {
      let email = this.state.connexionFormValues.email;
      let password = this.state.connexionFormValues.password;
      if (fields === "email") {
          email = e.target.value;
      }
      else {
          password = e.target.value;
      }
      this.setState({connexionFormValues : {email,password}});
    }
    else {
      let firstName = this.state.registrationFormValues.firstName;
      let lastName = this.state.registrationFormValues.lastName;
      let age = this.state.registrationFormValues.age;
      let email = this.state.registrationFormValues.email;
      let password = this.state.registrationFormValues.password;
      let twitterScreenName = this.state.registrationFormValues.twitterScreenName;

      if (fields === "lastName") {
        lastName = e.target.value;
      }
      else if (fields === "firstName") {
        firstName = e.target.value;
      }
      else if (fields === "age") {
        age = e.target.value;
      }
      else if (fields === "twitterScreenName") {
        twitterScreenName = e.target.value;
      }
      else if (fields === "email") {
        email = e.target.value;
      }
      else {
        password = e.target.value;
      }
      this.setState({registrationFormValues : {firstName,lastName,age,email,password}});
    }
  }

  render(){
      return (
        <div className="connection">
          <FormConnection
            changeInputValue={this.changeInputValue}
            inputValues={this.state.connexionFormValues}
            submitForm={this.send}
            connectionMessage={this.state.connectionMessage}
            connectionMessageStatus={this.state.connectionMessageStatus}
          />
          <FormRegistration
            changeInputValue={this.changeInputValue}
            inputValues={this.state.registrationFormValues}
            submitForm={this.send}
            registrationMessage={this.state.registrationMessage}
            registrationMessageStatus={this.state.registrationMessageStatus}
          />
        </div>
      );
  }
}

export default Connection;
