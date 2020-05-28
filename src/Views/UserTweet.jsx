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
    const userSession = JSON.parse(sessionStorage.getItem('userData'));
    fetchData(URL_TWEET + this.props.userData.twitterScreenName, 'get')
    .then((res)=>{
      console.log(res);

      this.setState({tweetList : res.data})
    })
  }

 render(){
      return (
        <div className="user-tweet">
        {this.props.userData.twitterScreenName === "" ? <h1>Vous n'avez de compte twitter</h1> : <div>
          {this.state.tweetList.map((tweet)=>{
            return(
              <div className="tweet-card">
                <img src={tweet.avatar} alt="profil"/>
                <div>
                  <p>Autheur : <b>{tweet.name}</b></p>
                  <p>crée le : <b>{tweet.createdAt}</b></p>
                  <p>{tweet.text}</p>
                </div>
              </div>
            )
          })}
        </div>

        }

        </div>
      );
  }
}

export default UserTweet;
