import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Post from '../Post/Post';

const PostContainerStyle = styled.div`
    margin: 20px auto;
    width: 640px;
`;


function PostContainer (props) {
    return (
        <PostContainerStyle>
            {props.data.map((eachPostObject, index) => <Post eachPostObject={eachPostObject} filteredUsernames={props.filteredUsernames} key={index} /> )}
        </PostContainerStyle>
    )
}

PostContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        }))
    }))
}


export default PostContainer;