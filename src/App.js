import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monters: users }))
  }

  render() {
    return (
      <div className="App">
        <CardList name='Lasse'>{this.state.monters.map(monster => (
          <h1 key={monster.id}> {monster.name} </h1>))} </CardList>
      </div>
    );
  }
}

export default App;
