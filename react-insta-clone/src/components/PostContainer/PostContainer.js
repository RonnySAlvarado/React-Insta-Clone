import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

function PostContainer (props) {
    return (
        <div className="PostContainer">
            {props.data.map((eachPost, index) => <Post eachPost={eachPost} index={index} inputHandler={props.inputHandler} input={props.input} />)}
        </div>
    )
}

PostContainer.propTypes = {
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


export default PostContainer;