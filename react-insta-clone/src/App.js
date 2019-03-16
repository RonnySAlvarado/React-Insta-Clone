import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      input: '',
    }
  }

  componentDidMount () {
    this.setState({ data: dummyData });
  }

  inputHandler = event => {
    this.setState ({ [event.target.name]: event.target.value });
  }

  render() {
    console.log(this.state.input);
    return (
      <div className="App-Container">
        <SearchBar data={this.state.data} inputHandler={this.inputHandler} input={this.state.input} />
        <PostContainer data={this.state.data} inputHandler={this.inputHandler} input={this.state.input} />
      </div>
    )
  }
}

export default App;
