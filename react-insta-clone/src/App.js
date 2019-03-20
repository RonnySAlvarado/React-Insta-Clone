import React from 'react';
import './App.css';
import WithAuthenticate from './components/Authentication/WithAuthenticate';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = WithAuthenticate(PostsPage)(Login);

class App extends React.Component {
    constructor () {
      super();
    }

  render() {
    return (
      <div className="App-Container">
        <ComponentFromWithAuthenticate />
      </div>
    )
  }
}

export default App;
