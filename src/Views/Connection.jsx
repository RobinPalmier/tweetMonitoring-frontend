import React, { Component } from 'react';
import FormConnection from '../Components/FormConnection';
import FormRegistration from '../Components/FormRegistration';

class Connection extends Component {
  constructor(props){
    super(props)
    this.state = {
      connexionFormValues : {email : "", password : ""},
      registrationFormValues : {firstName:"", lastName:"", age:"", email:"", password:""}
    }
  }

  send = (e, formType) => {
    e.preventDefault();
    console.log(formType);
    alert('envoyé');
  }

  changeInputValue = (e, formType, fields) => {
    console.log(e.target.value);
    console.log(formType);
    console.log(fields);
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
      console.log(e.target.value);
      let firstName = this.state.registrationFormValues.firstName;
      let lastName = this.state.registrationFormValues.lastName;
      let age = this.state.registrationFormValues.age;
      let email = this.state.registrationFormValues.email;
      let password = this.state.registrationFormValues.password;
      if (fields === "lastName") {
        lastName = e.target.value;
      }
      else if (fields === "firstName") {
        firstName = e.target.value;
      }
      else if (fields === "age") {
        age = e.target.value;
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
          />
          <FormRegistration
            changeInputValue={this.changeInputValue}
            inputValues={this.state.registrationFormValues}
            submitForm={this.send}
          />
        </div>
      );
  }
}

export default Connection;
