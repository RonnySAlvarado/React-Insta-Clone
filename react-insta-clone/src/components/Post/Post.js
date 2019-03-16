import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './Post.css';

function Post (props) {
    return (
        <div className="Post">
            <div className="usernameHeader">
                <img src={props.eachPost.thumbnailUrl} alt="thumbnail" />
                <h2>{props.eachPost.username}</h2>
            </div>

            <img src={props.eachPost.imageUrl} alt="imageurl" />

            <div className="likes-and-comments">
                <img className="icons" src="./icons8-heart-32.png" alt="heart logo" />
                <img className="icons" src="./icons8-speech-bubble-32.png" alt="speech bubble logo" />
            </div>

            <p className="likes">{props.eachPost.likes} likes</p>

            <CommentSection eachPost={props.eachPost} index={props.index} inputHandler={props.inputHandler} input={props.input} />
        </div>
    )
}
export default Post;