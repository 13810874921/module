import React, { Component } from 'react';
// import { Button } from 'antd';
import './css/App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Nav from './components/nav';
import Home from './Pages/home';
import One from './Pages/one';
import Two from './Pages/two';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Route exact path='/' component={Home}/>
            <Route path='/One' component={One}/>
            <Route path='/Two' component={Two}/>
          </div>
        </Router>
        
        {/* <Button type="primary">Button</Button> */}
      </div>
    );
  }
}

export default App;
