import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import Axios from 'axios';
import './HackerDetails.styled.css';
export default class HackerDetails extends Component {
  state = {
    getHackerDetails: '',
    dataHackerDetails: '',
    hackerDetailsNote:[],
    hackerDetailsBooked:[],
  }

  getHackerNewsDetails = () => {
    const idItems = this.props.hackerDetailsId.dataHackerNew;
    Axios.get(`https://hacker-news.firebaseio.com/v0/item/${idItems}.json`)
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

  componentDidUpdate(prevProps){
    if(this.props.isVisible && !prevProps.isVisible && this.props.hackerDetailsId){
      this.getHackerNewsDetails();
    }
    
  }
  componentDidMount(){
    
  }
  render() {
    const { isVisible, closeModal,addBookmark , hackerDetailsId, bookmarkId} = this.props;
    const { dataHackerDetails } = this.state;
    return (
      <div>
        <Modal
          title={`Information Hacker News Details - ${hackerDetailsId.dataHackerNew}`}
          visible={isVisible}
          onOk={closeModal}
          onCancel={closeModal}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Bookmark
            </Button>,
            <Button key="submit" type="primary" onClick={()=> { addBookmark(hackerDetailsId.dataHackerNew)}}>
              Save Post
            </Button>,
          ]}
        >
          {
            dataHackerDetails != null ?
              <div className="hacker-new-item">
                <div className="group">
                  <div className="group">
                    <span className="title">Post ID:</span>
                    <span> {dataHackerDetails.id} </span>
                  </div>
                  <div className="group">
                    <span className="title">Type: </span>
                    <span>{dataHackerDetails.type} </span>
                  </div>
                  <div className="group">
                    <span className="title">Score: </span>
                    <span>{dataHackerDetails.score} </span>
                  </div>
                  <div className="group">
                    <span className="title">Author: </span>
                    <span>{dataHackerDetails.by} </span>
                  </div>
                </div>
                <div className="group">
                  <span> {dataHackerDetails.title} </span>
                </div>
                <div className="group">
                  <span className="title">Answer: </span>
                  <span>{dataHackerDetails.text} </span>
                </div>                   
              </div>
              : ''
          }     
        </Modal>
      </div>
    )
  }
}
