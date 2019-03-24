import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import Post from '../Post/Post';

class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [],
          filteredUsernames: [],
          usernameArray: [],
          input: '',
        }
      }

    componentDidMount () {
      let usernames = dummyData.map(eachPost => eachPost.username);
      // let posts = dummyData.map((eachPost, index) => <Post usernames={usernames} eachPost={eachPost} key={index}/>)
      this.setState({ data: dummyData, filteredUsernames: usernames, usernameArray: usernames });
    }
    
    inputHandler = (event) => {
        this.setState ({ input: event.target.value });
        this.searchHandler(event);
    }
        
    searchHandler = (event) => {
        let filteredArray = this.state.usernameArray.filter(username => {
          if (username.toLowerCase().includes(event.target.value.toLowerCase())){
            return username;
          }
        })
        this.setState({ filteredUsernames: filteredArray })
    }

    render(){
        return (
            <div>
                <SearchBar inputHandler={this.inputHandler} input={this.state.input} />
                <PostContainer data={this.state.data} filteredUsernames={this.state.filteredUsernames} />
            </div>
        )
    }
}

export default PostsPage;