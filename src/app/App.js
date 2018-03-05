import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import Home from '../pages/Home/View'
import Collection from '../pages/Collection/View'
import Record from '../pages/Record/View'

import './style.scss'
import './reset.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
{/**        <Link to="/">首页</Link>
        <Link to="/Collection">Collection</Link>
        <Link to="/Record">Record</Link>**/}

          <Route exact path="/" component={Home} />
          <Route path="/collection" component={Collection} />
          <Route path="/record" component={Record} />
      </div>
      </Router>
    );
  }
}

export default App;
