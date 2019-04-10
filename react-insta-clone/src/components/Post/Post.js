import React from 'react';
import styled from 'styled-components';

const PostStyle = styled.div`
    display: block;
    margin-bottom: 20px;
    .usernameHeader {
        display: flex;
        align-items: center;
        padding: 10px;
        h2 {
            font-size: 10px;
            margin: 0 10px;
        }
        img {
            border-radius: 50%;
            height: 30px;
            width: 30px;
        }
    }
    .likes-and-comments {
        .icons {
            margin-left: 10px;
            cursor: pointer;
        }
    }
    .likes {
        font-size: 10px;
        font-weight: bold;
        margin-left: 15px;
    }
    .comments {
        margin: 0 auto;
        width: 95%;
        display: flex;
        align-items: baseline; 
        font-size: 10px;
        line-height: 3px;
        h3 {
            font-weight: bold;
        }
        p {
            margin-left: 5px;
        }
    }
    form {
        width: 100%;
        input {
            width: 99.5%;
            border: 1px solid white;
            border-top: 1px solid lightgray;
        }
    }
`;

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: this.props.eachPostObject.likes,
            liked: false,
            totalComments: this.props.eachPostObject.comments,
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

    likeHandler = () => {
        let num = this.state.like;
        if (this.state.liked === false) {
            this.setState({ like: num + 1, liked: true})
        }
        else this.setState ({ like: num - 1, liked: false })
    }


    render(){
        let i = 0;
        {this.state.liked ? i=30 : i=32} //2 heart images in public folder with ids very similiar to one another using 30 and 32 in their value
        let hidden = {
            display: 'none',
        };

        if (this.props.filteredUsernames.includes(this.props.eachPostObject.username)) {
            hidden = {
                display: 'block',
                border: '1px solid lightgray'
            }
        }
        
        console.log(this.props.filteredUsernames);
        return (

            <PostStyle>

            <div style={hidden}>
                <div className="usernameHeader">
                    <img src={this.props.eachPostObject.thumbnailUrl} alt="thumbnail" />
                    <h2>{this.props.eachPostObject.username}</h2>
                </div>
    
                <img src={this.props.eachPostObject.imageUrl} alt="imageurl" />
    
                <div className="likes-and-comments">
                    <img onClick={this.likeHandler} className="icons" src={`./icons8-heart-${i}.png`} alt="heart logo" />
                    <img className="icons" src="./icons8-speech-bubble-32.png" alt="speech bubble logo" />
                </div>
    
                <p className="likes">{this.state.like} likes</p>

                {this.state.totalComments.map(eachComment => {
                    return (
                    <div className="comments">
                        <h3>{eachComment.username}</h3>
                        <p>{eachComment.text}</p>
                    </div>
                    )
                })}

                <form onSubmit={this.addNewComment}>
                    <input 
                        type="text" 
                        placeholder="   ...add a comment" 
                        onChange={this.commentInputHandler} 
                        value={this.state.commentInput}>
                    </input>
                </form>
            </div>

            </PostStyle>

        )
    }
}
export default Post;