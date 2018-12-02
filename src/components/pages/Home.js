import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import SmashBall from '../../assets/smash_ball.png'
import {connect} from 'react-redux'
//import axios from 'axios'

class Home extends Component {

    render(){
        console.log(this.props);

        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <img src={SmashBall} alt="smash icon"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title pink-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) 
        : (
            <div className="center"> No posts yet</div>
        ) //empty
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

//literlly needs to match store !
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);