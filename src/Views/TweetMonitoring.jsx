import React, { Component } from 'react';
import fetchData from '../Functions/FetchData';
import AddHashtagForm from '../Components/addHashtagForm';

class TweetMonitoring extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue : "",
      hashtagList : ["#grosNoob", "#RobinLeNoob", "#MueenLeNoob"]
    }
  }

  submitForm = (e) => {
    e.preventDefault();
  }

  changeInputValue = (e) => {
    this.setState({inputValue : e.target.value})
  }

 render(){
      return (
        <div className="tweet-monitoring">
          <aside>
            <AddHashtagForm
              submitForm={this.submitForm}
              changeInputValue={this.changeInputValue}
              inputValue={this.state.inputValue}
            />
            <ul>
            {this.state.hashtagList.map((hashtag, key)=>{
              return (
                <li key={key}>{hashtag}</li>
              )
            })}
            </ul>
          </aside>
        </div>
      );
  }
}

export default TweetMonitoring;
