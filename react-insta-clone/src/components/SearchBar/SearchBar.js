import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBarStyle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    border-bottom: 1px solid gray;
    margin: 20px auto;
    .instagram-name-and-logo {
            width: 200px;
        }
    input {
            width: 200px;
        }
    .icons {
            margin: 0 15px;
        }
`;

//Not necessary to be a styled component, but doing so for practice

function SearchBar (props) {
    return (
        <SearchBarStyle>
            <img className="instagram-name-and-logo" src="./instagram-font-name-5.png" alt="instagram logo and name"></img>

            <input type="text" placeholder="Search" onChange={props.inputHandler} value={props.input}></input>

            <div className="searchBarIcons">
                <img className="icons" src="./icons8-compass-32.png" alt="compass logo"></img>
                <img className="icons" src="./icons8-heart-32.png" alt="heart logo"></img>
                <img className="icons" src="./icons8-customer-32.png" alt="profile logo"></img>
            </div>
        </SearchBarStyle>
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