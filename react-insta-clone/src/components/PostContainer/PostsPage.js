import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

class PostsPage extends React.Component {
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

    render(){
        return (
            <div>
                <SearchBar inputHandler={this.inputHandler} input={this.state.input} />
                <PostContainer data={this.state.filtered} />
            </div>
        )
    }
}

export default PostsPage;