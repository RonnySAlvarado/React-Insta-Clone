import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer (props) {
    return (props.data.map(eachPost => <CommentSection eachPost={eachPost} />)
    )
}

export default PostContainer;