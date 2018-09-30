import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Jumbotron from './components/Jumbotron'
import characters from "./data/characters.json";

class App extends Component {
  state = {
    characters
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
          {this.state.characters.map(char => (
            <Card
              id={char.id}
              key={char.id}
              name={char.name}
              image={char.image}
            />
          ))}
      </div>
    );
  }
}

export default App;
