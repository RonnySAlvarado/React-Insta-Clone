import React from 'react';
import Comment from '../Comment/Comment';
import './CommentSection.css';

function CommentSection (props) {
    return (
        <div className="container">
            <div className="usernameHeader">
                <img src={props.eachPost.thumbnailUrl} alt="thumbnail" />
                <h2>{props.eachPost.username}</h2>
            </div>
            <img src={props.eachPost.imageUrl} alt="imageurl" />
            <div className="comment-section">
                {(props.eachPost.comments.map(eachComment => <Comment eachComment={eachComment} />))}
            </div>
            <input type="text" placeHolder="...add a comment" onChange={props.inputHandler} value={props.input}></input>
        </div>
    )
};

export default CommentSection;