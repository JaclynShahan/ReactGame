import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <div>
          <Link to="/Easy">Easy</Link>
          <Link to="/Medium">Medium</Link>
          <Link to="/Hard">Hard</Link>
        </div>
        {router}
      </div>
    )
  }
}

export default App;
