import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Jumbotron from './components/Jumbotron'
import characters from "./data/characters.json";

class App extends Component {
  state = {
    characters,
    score: 0
  };

  handleScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  // handleClick = (props) => {
  //   props.clicked = true;
  // };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} />
        <Jumbotron />
          {this.state.characters.map(char => (
            <Card
              handleScore={this.handleScore}
              handleClick={this.handleClick}
              id={char.id}
              key={char.id}
              name={char.name}
              image={char.image}
              clicked={false}
            />
          ))}
      </div>
    );
  }
}

export default App;
