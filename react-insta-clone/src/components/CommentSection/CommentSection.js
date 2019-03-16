import React from 'react';
import Comment from '../Comment/Comment';
import './CommentSection.css';

function CommentSection (props) {
    return (
        <div className="comment-section">
            {(props.eachPost.comments.map(eachComment => <Comment eachComment={eachComment} />))}
            <input type="text" placeholder="...add a comment" onChange={props.inputHandler} name='input' value={props.input}></input>
        </div>
    )
};
export default CommentSection;