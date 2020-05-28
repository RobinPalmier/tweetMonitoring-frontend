import React, { Component } from 'react';
import fetchData from '../Functions/FetchData';
import AddHashtagForm from '../Components/addHashtagForm';
import { Line } from 'react-chartjs-2';

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
      const dataTmp = {
        labels: ['Lundi', 'Mardi', 'Mercredi', 'jeudi'],
        datasets: [{
            label: 'Nombre de tweet',
            data: [12, 19, 50000],
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
                <li key={key}>{hashtag}</li>
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
