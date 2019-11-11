import React, { Component } from "react";
import Axios from "axios";
import "./HackerNews.styled.css";
import HackerDetails from "../../containers/HackerDetails";
import { Pagination, Icon, Tabs, Collapse} from "antd";
const { TabPane } = Tabs;
const { Panel } = Collapse;

export default class HackerNews extends Component {  
  constructor(props) {
    super(props);
    this.state = {    
      error: "",
      dataHackerNews: [],
      minPage: 0,
      maxPage: 8,
      dataHackerSave: [],
      dataHackerBookmarks: [],
      isLoaded: false,
      dataHackerDetails: "",
      visible: false
    };
  }
  
  showModal = id => {
    this.setState({
      visible: true,
      dataHackerDetails: id
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  getHackerNews = () => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(res => res.json())
      .then(resultDate => {
        this.setState({
          isLoaded: true,
          dataHackerNews: resultDate
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error: error
        });
      });
  };
  
  getHackerNewsWithAxios = () => {
    Axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(result =>
        this.setState({
          isLoaded: true,
          dataHackerNews: [...result.data]
        })
      )
      .catch(error =>
        this.setState({
          isLoaded: true,
          error: error
        })
      )
      .finally(function() {
        // always executed
      });
  };
  componentDidMount() {}
  callback = key => {
    const { bookmarkId, savePostId } = this.props;
    this.setState({
      dataHackerBookmarks: [],
      dataHackerSave: []
    });
    if (bookmarkId.length > 0) {
      bookmarkId.map((bookmarkIds, index) =>
        Axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${bookmarkIds}.json`
        )
          .then(result =>
            this.setState(state => {
              const newBookmark = { ...result.data };
              const addNewBookmark = [
                ...state.dataHackerBookmarks,
                newBookmark
              ];
              return {
                ...state,
                dataHackerBookmarks: addNewBookmark
              };
            })
          )
          .catch(error =>
            this.setState({
              isLoaded: true,
              error: error
            })
          )
          .finally(function() {})
      );
    }

    if (savePostId.length > 0) {
      savePostId.map((savePots, index) =>
        Axios.get(`https://hacker-news.firebaseio.com/v0/item/${savePots}.json`)
          .then(result =>
            this.setState(state => {
              const newBookmark = { ...result.data };
              const addNewBookmark = [...state.dataHackerSave, newBookmark];
              return {
                ...state,
                dataHackerSave: addNewBookmark
              };
            })
          )
          .catch(error =>
            this.setState({
              isLoaded: true,
              error: error
            })
          )
          .finally(function() {})
      );
    }
  };
  paginationChange = value => {
    if (value <= 1) {
      this.setState({
        minPage: 0,
        maxPage: 8
      });
    } else {
      this.setState({
        minPage: (value * 8) - 8,
        maxPage: value * 8
      });
    }
  };
  render() {
    
    const { bookmarkId, addBookmark, savePosts } = this.props;
    const {
      dataHackerDetails,
      dataHackerNews,
      dataHackerSave,
      dataHackerBookmarks,
      isLoaded,
      error,
      visible
    } = this.state;

    if (error) return <div> error: {error}</div>;
    
    return (
      <Tabs defaultActiveKey="1" onChange={this.callback}>
        <TabPane tab="Live Content" key="1">
          <div className="hacker-new-container">
            {
              !dataHackerNews.length > 0 ?
                <button
                className="btn-hacker-new primary"
                onClick={this.getHackerNewsWithAxios}
              >
                <Icon type="sync" />
                Fetch New Data
              </button>
              : ''
            }
          
            <div className="card-container">
              {dataHackerNews && dataHackerNews.length > 0 &&
                dataHackerNews.slice(this.state.minPage, this.state.maxPage).map((dataHackerNew, index) => (
                
                <div className="card" key={index}>
                  <span className="img">Hacker News</span>
                  <div className="card-body">
                    <h5 className="card-title">{dataHackerNew}</h5>
                    <p className="card-text">
                      Some quick example text to build on the modal data and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary"
                      onClick={() => this.showModal({ dataHackerNew })}
                    >
                      <span>More details</span>
                    </a>
                  </div>
                </div>
              ))}
              
              {
                dataHackerNews && dataHackerNews.length > 0 ?
                <Pagination
                  defaultCurrent={1}
                  defaultPageSize={8}
                  onChange={this.paginationChange}
                  total={dataHackerNews && dataHackerNews.length }
                />
                : ''
              }
                 
            </div>
            <div className="hacker-new-details">
              <HackerDetails
                isVisible={visible}
                closeModal={this.handleCancel}
                hackerDetailsId={dataHackerDetails}
                savePosts={savePosts}
                addBookmark={addBookmark}
              />
            </div>
          </div>          
        </TabPane>
        <TabPane tab="All Post Your Save" key="2">
          <div className="hacker-new-item">
            <Collapse accordion>
              {dataHackerSave.map((dataHackerBookmark, index) => (
                <Panel  key={index}  header={dataHackerBookmark.id}>
                  <div className="group">
                    <div className="group">
                      <span className="title">Type: </span>
                      <span>{dataHackerBookmark.type} </span>
                    </div>
                    <div className="group">
                      <span className="title">Score: </span>
                      <span>{dataHackerBookmark.score} </span>
                    </div>
                    <div className="group">
                      <span className="title">Author: </span>
                      <span>{dataHackerBookmark.by} </span>
                    </div>
                  </div>
                  <div className="group">
                    <span> {dataHackerBookmark.title} </span>
                  </div>
                  <div className="group">
                    <span className="title">Answer: </span>
                    <span>{dataHackerBookmark.text} </span>
                  </div>              
                  </Panel>                
              ))}
           
            </Collapse>
          </div>
        </TabPane>
        
        <TabPane tab="All Post Your Bookmark" key="3">
          <Collapse accordion>
            {dataHackerBookmarks.map((dataHackerBookmark, index) => (
              <Panel  key={index}  header={dataHackerBookmark.id}>
                <div className="group">
                  <div className="group">
                    <span className="title">Type: </span>
                    <span>{dataHackerBookmark.type} </span>
                  </div>
                  <div className="group">
                    <span className="title">Score: </span>
                    <span>{dataHackerBookmark.score} </span>
                  </div>
                  <div className="group">
                    <span className="title">Author: </span>
                    <span>{dataHackerBookmark.by} </span>
                  </div>
                </div>
                <div className="group">
                  <span> {dataHackerBookmark.title} </span>
                </div>
                <div className="group">
                  <span className="title">Answer: </span>
                  <span>{dataHackerBookmark.text} </span>
                </div>              
                </Panel>                
            ))}
            
          </Collapse>
        </TabPane>
      </Tabs>
    );
  }
}
