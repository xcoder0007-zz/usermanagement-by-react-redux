import React, { Component } from 'react';
import Users from './../containers/users'
import UserDetail from './../containers/users/user-detail'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Users />
        <UserDetail />
      </div>
    );
  }
}

export default App;
