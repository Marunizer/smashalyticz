import React, {Component} from 'react';
//import axios from 'axios'
import {connect} from 'react-redux';
import { deletePost} from '../actions/PostActions'

class Post extends Component {

    
    // state = {
    //     post: null
    // }
    // componentDidMount(){
    //     console.log(this.props)
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
    //     .then(res =>{
    //         this.setState({
    //             post: res.data
    //         })  
    //         console.log(res)
    //     })
    // }

    handleClick = () => {
        this.props.deletePost(this.props.posts  .id)
        //re-direct to home page
        this.props.history.push('/')
    }

    render(){
        console.log(this.props);
        const post = this.props.posts ? (
            <div className="post">
                <h4 className="center">{this.props.posts.title}</h4>
                <p>{this.props.posts.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading...</div>
        )

        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

//ownProps are our shiz before we connect to the store
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {                   //callback
        posts: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       //manual:  deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id})}
       deletePost: (id) => { dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);