import React, { Component } from 'react';
import fetchData from '../Functions/FetchData';
import {URL_TWEET} from '../Constantes/Url'

class UserTweet extends Component {
  constructor(props){
    super(props)
    this.state = {
      tweetList : []
    }
  }

  componentDidMount(){
    fetchData(URL_TWEET, 'get')
    .then((res)=>{
      this.setState({tweetList : res.tweets})
    })
  }

 render(){
      return (
        <div className="user-tweet">
          <div>
            {this.state.tweetList.map((tweet)=>{
              return(
                <div className="tweet-card">
                  <img src={tweet.user.avatar}/>
                  <p>{tweet.text}</p>
                  <p>{tweet.user.name}</p>
                  <p>{tweet.createdAt}</p>
                </div>
              )
            })}
          </div>
        </div>
      );
  }
}

export default UserTweet;
