import React from 'react';
import './SearchBar.css';

function SearchBar (props) {
    return (
        <div className="searchBar">
            <img className="instagram-name-and-logo" src="./instagram-font-name-5.png" alt="instagram logo and name"></img>
            <input type="text" placeHolder="Search" onChange={props.inputHandler} value={props.input}></input>
            <div className="searchBarIcons">
                <img className="icons" src="./icons8-compass-32.png" alt="compass logo"></img>
                <img className="icons" src="./icons8-heart-32.png" alt="heart logo"></img>
                <img className="icons" src="./icons8-customer-32.png" alt="profile logo"></img>
            </div>
        </div>
    )
}

export default SearchBar;
