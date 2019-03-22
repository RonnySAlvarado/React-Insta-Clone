import React from 'react';
import Comment from '../Comment/Comment';
import styled from 'styled-components';

const CommentSectionStyle = styled.div`
    margin: 0 auto;
    width: 95%;
    input {
        width: 90%;
        margin-left: 2%
    }
`;

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            totalComments: this.props.eachPost.comments,
            commentInput: '',
        }
    }

    addNewComment = event => {
        event.preventDefault();
        let comment = {
            username: localStorage.getItem('username'),
            text: this.state.commentInput
          }
        this.setState({ totalComments: [...this.state.totalComments, comment], commentInput: ''})
    }

    commentInputHandler = event => {
        this.setState ({ commentInput: event.target.value });
    }

    render() {
        // console.log(this.state.totalComments);
        return (
            <CommentSectionStyle>

                {this.state.totalComments.map(eachComment => <Comment eachComment={eachComment} key={this.props.index} />)}

                <form onSubmit={this.addNewComment}>
                    <input 
                        type="text" 
                        placeholder="...add a comment" 
                        onChange={this.commentInputHandler} 
                        value={this.state.commentInput}>
                    </input>
                </form>

            </CommentSectionStyle>
        )
    }
}
export default CommentSection;