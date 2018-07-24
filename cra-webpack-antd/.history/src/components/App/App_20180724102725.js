import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './Home/home';
import Nav from './Nav/nav';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={Nav}/>
          <Route path='/Home' component={Home}/>
          <Route path='/Nav' component={Nav}/>
        </Router>
        <div>我是谁</div>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
