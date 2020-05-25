import React, { Component } from 'react';
import FormConnection from '../Components/FormConnection';
import FormRegistration from '../Components/FormRegistration';

class Connection extends Component {
  constructor(props){
    super(props)
    this.state = {
      connexionFormValues : {email : "", password : ""},
      registrationFormValues : {firstName:"", lastName:"", email:"", password:""}
    }
  }

  send = (e) => {
    e.preventDefault();
    alert('envoyé');
  }

  changeInputValue = (e, typeForm, fields) => {
    console.log(e.target.value);
    console.log(typeForm);
    console.log(fields);
  }

  render(){
      return (
        <div className="connection">
          <FormConnection changeInputValue={this.changeInputValue} submitForm={this.send}/>
          <FormRegistration/>
        </div>
      );
  }
}

export default Connection;
