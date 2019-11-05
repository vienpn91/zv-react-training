import React, { Component } from 'react'
import Axios from 'axios';
import './HackerNews.styled.css';
import HackerDetails from '../../containers/HackerDetails';
import { Pagination, Icon } from 'antd';
export default class HackerNews extends Component {
    constructor(props){
    super(props);
    this.state = {
      error: '',
      dataHackerNews: [],
      isLoaded: false,
      dataHackerDetails:'',
      visible: false
    }
  }
  showModal = (id) => {
    this.setState({
      visible: true,
      dataHackerDetails: id
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
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
  componentDidMount(){

  }
  render() {
    const { dataHackerDetails, dataHackerNews, isLoaded, error, visible } = this.state;
    console.log(dataHackerDetails);
    if(error)
      return( 
        <div> error: {error}</div>
      )
    return (
      <div className="hacker-new-container">
        <button className="btn-hacker-new primary" onClick ={this.getHackerNewsWithAxios}>
          <Icon type="sync" />
          Fetch New Data
        </button>        
        <div className="card-container">
          {
            dataHackerNews.map((dataHackerNew, index) =>
            <div className="card" key={index}>
              <span className="img">Hacker News</span>
              <div className="card-body">
                <h5 className="card-title">{dataHackerNew}</h5>
                <p className="card-text">Some quick example text to build on the modal data and make up the bulk of the card's content.</p>
                <a 
                  href="#" 
                  className="btn btn-primary"
                  onClick={() => this.showModal({dataHackerNew})}
                  >
                  <span>More details</span>
                </a>
              </div>
            </div>              
            )
          }
        </div>
        <div className="hacker-new-details">
          <HackerDetails 
            isVisible = { visible }
            closeModal = { this.handleCancel }
            hackerDetailsId = { dataHackerDetails }
          />
          {/* <Pagination defaultCurrent={1} total={50} /> */}
        </div>
      </div>
    )
  }
}
