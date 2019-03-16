import React from 'react';
import Comment from '../Comment/Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            totalComments: props.eachPost.comments,
            commentInput: '',
        }
    }

    addNewComment = newComment => {
        let comment = {
            username: 'Ronny',
            text: newComment,
        }
        this.setState({ totalComments: [...this.state.totalComments, comment], commentInput: ''})
    }

    commentInputHandler = event => {
        this.setState ({ commentInput: event.target.value });
    }

    render(props) {
        return (
            <div className="comment-section">

                {props.eachPost.comments.map(eachComment => <Comment eachComment={eachComment} />)}

                <form onSubmit={() => this.addNewComment(this.state.commentInput)}>
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