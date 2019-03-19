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
      filtered: []
    }
  }

  componentDidMount () {
    this.setState({ data: dummyData, filtered: dummyData });
  }

  inputHandler = (event) => {
    this.setState ({ input: event.target.value });
    this.searchHandler(event);
  }
    
  searchHandler = (event) => {
    let filteredArray = this.state.data.filter(eachUser => {
      if (eachUser.username.toLowerCase().includes(event.target.value.toLowerCase())){
        return eachUser;
      }
    })
    this.setState({ filtered: filteredArray, input: event.target.value })
  }

  render() {
    // console.log(this.state.input);
    // console.log(this.state.filtered);
    return (
      <div className="App-Container">
        <SearchBar inputHandler={this.inputHandler} input={this.state.input} />
        <PostContainer data={this.state.filtered} />
      </div>
    )
  }
}

export default App;
