import React from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';

function SearchBar (props) {
    return (
        <div className="searchBar">
            <img className="instagram-name-and-logo" src="./instagram-font-name-5.png" alt="instagram logo and name"></img>

            <input type="text" placeholder="Search" onChange={props.inputHandler} value={props.input}></input>

            <div className="searchBarIcons">
                <img className="icons" src="./icons8-compass-32.png" alt="compass logo"></img>
                <img className="icons" src="./icons8-heart-32.png" alt="heart logo"></img>
                <img className="icons" src="./icons8-customer-32.png" alt="profile logo"></img>
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        }))
    }))
}

export default SearchBar;