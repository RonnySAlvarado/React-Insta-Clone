import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

function PostContainer (props) {
    return (
        <div className="PostContainer">
            {props.data.map(eachPost => <Post eachPost={eachPost} inputHandler={props.inputHandler} input={props.input} />)}
        </div>
    )
}

PostContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string, 
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))     
    }))
}


export default PostContainer;