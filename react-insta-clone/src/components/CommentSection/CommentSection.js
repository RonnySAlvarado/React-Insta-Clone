import React from 'react';
import Comment from '../Comment';

function CommentSection (props) {
    return (props.eachPost.comments.map(eachComment => <Comment eachComment={eachComment} />));
};

export default CommentSection;