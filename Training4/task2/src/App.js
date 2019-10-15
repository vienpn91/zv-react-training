import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataItems: [],
      error: '',
      isLoaded: false,
    }
  }
 countriesAPI = () =>{
   fetch('https://restcountries.eu/rest/v2/name/vietnam')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          dataItems: result,

        })
      }
    ,(error) => {
      this.setState({
        isLoaded: true,
        error: error,
      })
    }
    )
 }
  componentDidMount(){
    this.countriesAPI();
  }
  render(){
    const {isLoaded, dataItems, error} = this.state;
    console.log(isLoaded, dataItems, error);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"  style={{width: '160px' }}/>
          <Container>
            <Row>
              <Col>
              {
                dataItems.map((item, index)=>
                  <Card key={index}>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Body>
                      <Card.Title>{item.region}</Card.Title>
                      <Card.Text>
                        {item.population}
                        {
                          item.topLevelDomain
                        }
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                )
              }
               
              </Col>              
            </Row>
          </Container>
        </header>
      </div>
    );
  }
};

