import React, { Component } from 'react';
import fetchData from '../Functions/FetchData';

class TweetMonitoring extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

 render(){
      return (
        <div className="tweet-monitoring">
          <h1>Data visualisation des #mot clés</h1>
          <h2>Mueen Le Gros Noob !</h2>
        </div>
      );
  }
}

export default TweetMonitoring;
