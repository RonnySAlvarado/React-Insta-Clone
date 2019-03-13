import React from 'react';
import './Comment.css';

function Comment (props) {
    return (
        <div className="commentContainer">
            <h3>{props.eachComment.username}</h3>
            <p>{props.eachComment.text}</p>
        </div>
    )
}

export default Comment;