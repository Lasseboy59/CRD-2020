import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monters: [
        {
          name: 'Frankenstein',
          id: '1'
        },
        {
          name: 'Dracula',
          id: '23'
        },
        {
          name: 'Zombie',
          id: 'asc'
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monters.map(monster => <h1 key={monster.id}> {monster.name} </h1>)
        }
      </div>
    );
  }
}

export default App;
