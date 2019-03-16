import React from 'react';
import Comment from '../Comment/Comment';
import './CommentSection.css';

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
            username: 'Ronny',
            text: this.state.commentInput
          }
        this.setState({ totalComments: [...this.state.totalComments, comment], commentInput: ''})
    }

    commentInputHandler = event => {
        this.setState ({ commentInput: event.target.value });
    }

    render() {
        console.log(this.state.totalComments);
        return (
            <div className="comment-section">

                {this.state.totalComments.map(eachComment => <Comment eachComment={eachComment} />)}

                <form onSubmit={this.addNewComment}>
                    <input 
                        type="text" 
                        placeholder="...add a comment" 
                        onChange={this.commentInputHandler} 
                        value={this.state.commentInput}>
                    </input>
                </form>

            </div>
        )
    }
}
export default CommentSection;