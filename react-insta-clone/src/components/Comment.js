import React from 'react';

function Comment (props) {
    console.log(props.eachComment);
    return (
        <div>
            <h2>{props.eachComment.username}</h2>
            <h2>{props.eachComment.text}</h2>
        </div>
    )
}

export default Comment;