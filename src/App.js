import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: "",
    };
    // This binding is necessary to make `this` work in the method
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((fetchedMonsters) => {
        console.log(fetchedMonsters);
        this.setState({ monsters: fetchedMonsters });
      });
  }

  // handleChange = (e) => {
  //   const userSearch = e.target.value;
  //   this.setState({search: userSearch});
  // };
  handleChange(e) {
    const userSearch = e.target.value;
    this.setState({ search: userSearch });
  }

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
      <h1 className="heading-1" >Monsters Rolodex</h1>
        <SearchBar
          placeholder="search your monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
