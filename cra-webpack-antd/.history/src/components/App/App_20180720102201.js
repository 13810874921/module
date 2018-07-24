import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={}/>
          <Route exact path='/Home' component={home}/>
          <Route exact path='/Nav' component={nav}/>
        </Router>
        <div>我是谁</div>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
