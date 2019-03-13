import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
      input: '',
    }
  }

  inputHandler = (event) => {
    this.setState ({ input: event.target.value });
  }


  render() {
    console.log(this.state.input);
    return (
        <PostContainer data={this.state.data} inputHandler={this.inputHandler} input={this.state.input} />
    )
  }
}

export default App;
