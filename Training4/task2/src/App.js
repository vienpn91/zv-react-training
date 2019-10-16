import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _debounce from 'lodash/debounce';
import _throttle from 'lodash/throttle';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataItems: [],
      error: '',
      isLoaded: false,
      keySearch: '',
      typeSearch:'all'
    }
    this.handlerSearchCountries = _debounce(this.handlerSearchCountries, 400);
  }

 countriesAPI = (searchKey) => {
   const insertKey = searchKey ? `name/${searchKey}`: 'all' ;
   fetch('https://restcountries.eu/rest/v2/' + insertKey)   
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          dataItems: result.status == 404 ? [] : result ,
        })
      }
    )
    .catch(
      error => {
        this.setState({
          isLoaded: true,
          error: error,
        })
      }
    )
    
 }

 handlerSearchCountries = (value) => {
   this.countriesAPI(value);
 }
  componentDidMount(){
    this.countriesAPI();
  }

  render(){
    const {isLoaded, dataItems, error, keySearch, typeSearch} = this.state;
    console.log(typeSearch);
    if(error)
      return (
        <div> error: {error}</div>
      );
    if(!isLoaded)
      return (
        <div className="loading">
          <span>Loading....</span>
        </div>
      );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"  style={{width: '160px' }}/>
          <h3>LIST COUNTRIES</h3>          
          <Container>
            <div className="search-block">
              <div className="search-form">
                <input 
                  onChange={(e) => {
                    this.handlerSearchCountries(e.target.value); 
                    this.setState({keySearch:e.target.value})}
                  }
                  value={keySearch} 
                  className="searchCountry" 
                  type="text" name="country" 
                  placeholder="Search Name Country" 
                />
                <select 
                  onChange = {(e) =>{ 
                    this.setState({typeSearch:e.target.value})}
                  }
                    >
                  <option value="all">All</option>
                  <option value="name">Name</option>
                  <option value="region">Region</option>
                  <option value="language">Language</option>
                </select>
              </div>              
            </div>
            <Row>
              <div>
                <Col className="vienpn">
                {
                  (dataItems|| []).map((data, index)=>                 
                    <div className='countries-item' key={index}>
                      <div className="countries-head">
                        <img src={data.flag} alt={data.name}/>
                        <span>{data.name}</span>
                      </div>
                      <div className="countries-info">
                        <span className="title">Capital: </span>
                        <span>{data.capital}</span>
                      </div>
                      <div className="countries-info">
                        <span className="title">Region: </span>
                        <span>{data.region}</span>
                      </div>
                      <div className="countries-info">
                        <span className="title"> Timezones: </span>
                        <span>{data.timezones.join(', ')}</span>                    
                      </div>
                      <div className="countries-info">
                        <span className="title">Languages:</span>
                        <span>
                        {
                          data.languages.map((languages, index) => 
                            <span key={index}>{languages.name}</span>
                          )
                        }
                        </span>
                      </div>
                      <div className="countries-info">
                        <span className="title">Region: </span>
                        <span>{data.region}</span>
                      </div>
                      <div className="countries-info">
                        <span className="title">Currencies:</span>
                        <span>
                        {
                          data.currencies.map((currencies, index) => 
                            <span key={index}>{currencies.name}</span>
                          )
                        }
                        </span>
                      </div>                    
                    </div>
                  )
                }               
                </Col>     
              </div>         
            </Row>
          </Container>
        </header>
      </div>
    );
  }
};

