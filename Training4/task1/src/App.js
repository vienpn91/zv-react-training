import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import './App.css'
import _debounce from 'lodash/debounce';
import _throttle from 'lodash/throttle';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
      dataItems: [],
      isLoaded: false,
    }
    this.handlerGetMoreJokeDebounced = _debounce(this.fetchAPI, 1000);
    this.handlerGetMoreJokeThrottle = _throttle(this.handlerGetMoreJoke, 1000);
  }
  fetchAPI = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          dataItems: result
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error: error
        })
      }
    )
  }
  componentDidMount(){
    this.fetchAPI()
  }

  handlerGetMoreJoke = () =>{
    this.handlerGetMoreJokeDebounced();
  }
  render() {   
    const { error, isLoaded, dataItems } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return (
        <div className="loading">
          <span>Loading....</span>
        </div>
      );
    }
    return (
      <List>
        {
          dataItems.map((dataItem) =>
            <ListItem key={dataItem.id} alignItems="flex-start" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.54)'}}>
              <React.Fragment>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="https://avatars2.githubusercontent.com/u/40975587?s=460&v=4" />
                </ListItemAvatar>
                <ListItemText
                  primary= { dataItem.punchline }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                      { dataItem.type }
                      </Typography>
                      {` - ` + dataItem.setup }
                    </React.Fragment>
                  }              
                />
              </React.Fragment>
            </ListItem>
          )
        }
        <Fab onClick={this.handlerGetMoreJoke} style={{margin: '20px auto', display: 'flex'}} variant="extended" color="primary" aria-label="add">
          Get more joke
        </Fab>
      </List>
    );
  }
  
}
