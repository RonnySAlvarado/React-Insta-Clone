import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './Post.css';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: this.props.eachPost.likes,
            liked: false,
        }
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
        return (
            <div className="Post">
                <div className="usernameHeader">
                    <img src={this.props.eachPost.thumbnailUrl} alt="thumbnail" />
                    <h2>{this.props.eachPost.username}</h2>
                </div>
    
                <img src={this.props.eachPost.imageUrl} alt="imageurl" />
    
                <div className="likes-and-comments">
                    <img onClick={this.likeHandler} className="icons" src={`./icons8-heart-${i}.png`} alt="heart logo" />
                    <img className="icons" src="./icons8-speech-bubble-32.png" alt="speech bubble logo" />
                </div>
    
                <p className="likes">{this.state.like} likes</p>
    
                <CommentSection eachPost={this.props.eachPost} key={this.props.index} />
            </div>
        )
    }
}
export default Post;