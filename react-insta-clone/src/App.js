import React from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar';
import WithAuthenticate from './components/Authentication/WithAuthenticate';
import PostsPage from './components/PostContainer/PostsPage';

// const ComponentFromWithAuthenticate = WithAuthenticate(PostsPage);

class App extends React.Component {
    constructor () {
      super();
    }

  render() {
    return (
      <div className="App-Container">
        <PostsPage />
      </div>
    )
  }
}

export default App;
