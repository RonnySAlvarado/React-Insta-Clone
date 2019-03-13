import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

function PostContainer (props) {
    return (
        <div>
            {props.data.map(eachPost => <CommentSection eachPost={eachPost} inputHandler={props.inputHandler} input={props.input} />)}
        </div>
    )
}

export default PostContainer;