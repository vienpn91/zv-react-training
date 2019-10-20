import React, { Component } from 'react'
import Axios from 'axios';

export default class HackerNews extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      error: '',
      dataHackerNews: [],
      isLoaded: false,
      dataHackerDetails:{},
    }
  }
  getHackerNews = () => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => res.json())
      .then(
        (resultDate) => {
          this.setState({
            isLoaded: true,
            dataHackerNews: resultDate
          })
        }
      )
      .catch(
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          })
        }
      )
  }
  getHackerNewsWithAxios = () => {
    Axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(result =>
        this.setState({
          isLoaded: true,
          dataHackerNews: [...result.data]
        }))
      .catch(error =>
        this.setState({
          isLoaded: true,
          error: error
      }))
      .finally(function () {
        // always executed
      }); 
    
  }
  getHackerNewsDetails = (id) => {
    console.log(id.dataHackerNew)
    Axios.get(`https://hacker-news.firebaseio.com/v0/item/${id.dataHackerNew}.json`)
      .then(result =>
        this.setState({
          isLoaded: true,
          dataHackerDetails: { ...result.data }
        }))
      .catch(error =>
        this.setState({
          isLoaded: true,
          error: error
      }))
      .finally(function () {
        // always executed
      });     
  }
  componentDidMount(){

  }
  render() {
    const { dataHackerDetails, dataHackerNews, isLoaded, error } = this.state;
    console.log(dataHackerDetails);
    if(error)
      return( 
        <div> error: {error}</div>
      )
    return (
      <div className="hacker-new-container">
        <button className="btn-hacker-new" onClick ={this.getHackerNewsWithAxios}>Get Hacker News</button>
        <ul className="hacker-new-all">
          {
            dataHackerNews.map((dataHackerNew, index) =>
              <li className="hacker-new-item" key={index}>
                <button 
                  className="btn-hacker-new-detail" 
                  onClick ={() => this.getHackerNewsDetails({dataHackerNew})}>
                    {dataHackerNew}
                  </button>
              </li>
            )
          }
        </ul>
        <div className="hacker-new-details">          
        
          {
            dataHackerDetails != null ?
              <div className="hacker-new-item">                  
                {dataHackerDetails.title}
                {dataHackerDetails.url}
                {dataHackerDetails.type}
                {dataHackerDetails.score} 
              </div>
              : ''
          }
          
        
        
        </div>
      </div>
    )
  }
}
