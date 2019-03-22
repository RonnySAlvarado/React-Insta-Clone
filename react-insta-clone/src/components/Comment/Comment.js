import React from 'react';
import styled from 'styled-components';

const CommentContainerStyle = styled.div`
    display: flex;
    align-items: baseline; 
    font-size: 10px;
    margin: 0;
    line-height: 3px;
    h3 {
        font-weight: bold;
    }
    p {
        margin-left: 5px;
    }
`;

function Comment (props) {
    return (
        <CommentContainerStyle>
            <h3>{props.eachComment.username}</h3>
            <p>{props.eachComment.text}</p>
        </CommentContainerStyle>
    )
}
export default Comment;