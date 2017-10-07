import React, { Component } from 'react';
import Users from './../containers/users'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Users />
      </div>
    );
  }
}

export default App;
