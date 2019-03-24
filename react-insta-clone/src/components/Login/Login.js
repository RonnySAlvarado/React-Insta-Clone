import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  background-color: white;
  border: 1px solid lightgrey;
  max-width: 600px;
  margin: 50px auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
      width: 80%;
      margin-bottom: 20px;
  }
  input {
      width: 50%;
      margin: 0;
  }
  button {
    background-color: blue;
    color: white;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid lightgray;
    margin: 10px 0;
    height: 40px;
    width: 50%;
    transition: 0.2s;
  
    &:hover {
      background-color: lightblue;
      box-shadow: 0px 5px 5px 0px rgba(176, 170, 176, 1);
      transform: translateY(-2px);
      transition: 0.2s;
    }
  
    &:active {
      transform: translateY(2px);
      box-shadow: none;
      transition: 0.2s;
    }
  }
`;



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
            <LoginContainer>
                <img className="instagram-name-and-logo" src="./instagram-font-name-5.png" alt="instagram logo and name"></img>
                <input type='text' placeholder='Username' onChange={this.usernameInput} value={this.state.username}></input>
                <input type='password' placeholder='Password' onChange={this.passwordInput} value={this.state.password}></input>
                <button onClick={this.loginHandler}>Log In</button>
            </LoginContainer>
        )
    }
}

export default Login;