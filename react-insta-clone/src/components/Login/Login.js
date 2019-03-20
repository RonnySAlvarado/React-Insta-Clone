import React from 'react';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    usernameInput = (event) => {
        this.setState({ username: event.target.value})
    }

    passwordInput = (event) => {
        this.setState({ password: event.target.value})
    }

    loginHandler = () => {
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        window.location.reload();
    }

    render () {
        return (
            <div className="login-container">
                <h2>Instagram Login Placeholder</h2>
                <input type='text' placeholder='Username' onChange={this.usernameInput} value={this.state.username}></input>
                <input type='text' placeholder='Password' onChange={this.passwordInput} value={this.state.password}></input>
                <button onClick={this.loginHandler}>Log In</button>
            </div>
        )
    }
}

export default Login;