
import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import logo from './logo.svg';
import './App.css';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import HackerNew  from './components/HackerNews';

const { store } = createStore();
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />        
        </header>      
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Live Content" key="1">
            <HackerNew />
          </TabPane>
          <TabPane tab="All Post Your Save" key="2">
            All Post Your Save
          </TabPane>
          <TabPane tab="All Post Your Bookmark" key="3">
            All Post Your Bookmark
          </TabPane>
        </Tabs>,
      </div>
    </Provider>
  );
}

export default App;
