import React, { Component } from 'react';
import fetchData from '../Functions/FetchData';
import AddHashtagForm from '../Components/addHashtagForm';
import { Line } from 'react-chartjs-2';

class TweetMonitoring extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue : "",
      hastagSelected : {data : {x : [], y:[]}},
      hashtagList : [
        {name : "#toto", isSelected : false, data : {x:[12, 19, 50000, 500],y:['Lundi', 'Mardi', 'Mercredi', 'jeudi']}},
        {name : "#tutu", isSelected : false, data : {x:[12, 19, 5, 341],y:['Lundi', 'Mardi', 'Mercredi', 'jeudi']}},
        {name : "#titi", isSelected : false, data : {x:[125, 324, 50, 800],y:['Lundi', 'Mardi', 'Mercredi', 'jeudi']}}
      ]
    }
  }

  submitForm = (e) => {
    e.preventDefault();
  }

  changeInputValue = (e) => {
    this.setState({inputValue : e.target.value})
  }

  selectHashtag = (hashtag) => {
    let newHashtagSelected;
    const newHashtagList = this.state.hashtagList.map((keyword)=>{
      if (keyword.name === hashtag.name) {
        keyword.isSelected = true;
        newHashtagSelected = keyword;
        return keyword;
      }
      else {
        keyword.isSelected = false;
        return keyword;
      }
    })
    this.setState({hashtagList : newHashtagList, hastagSelected : newHashtagSelected})
  }

 render(){
      let dataTmp = {
        labels: this.state.hastagSelected.data.y,
        datasets: [{
            label: 'Nombre de tweet',
            data: this.state.hastagSelected.data.x,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
      }
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
                <li
                  key={key}
                  onClick={()=>this.selectHashtag(hashtag)}
                  style={hashtag.isSelected === true ? {background : "black", color : "white"} : {}}
                >
                  {hashtag.name}
                </li>
              )
            })}
            </ul>
          </aside>
          <div className="twitter-chart">
            <Line
              data={dataTmp}
              width={800}
              height={800}
            />
          </div>
        </div>
      );
  }
}

export default TweetMonitoring;
