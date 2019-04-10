import React from 'react';


const WithAuthenticate = PostsPage => Login => {
    return class extends React.Component {
        constructor(){
            super();
            this.state = {
                loggedIn: false
            }
        }
        componentDidMount (){
            if (localStorage.getItem('username')){
                this.setState ({ loggedIn: true })
            }
        }
        render() {
            return (
                <div>
                    {this.state.loggedIn === true ? <PostsPage /> : <Login />}
                </div>
            )
        }
    }
}

export default WithAuthenticate;