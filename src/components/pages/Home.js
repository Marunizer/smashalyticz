import React, {Component} from 'react';
import {Link} from 'react-router-dom'
//import axios from 'axios'
import SmashBall from '../../assets/smash_ball.png'
//could just use a fetch, but using axios instead
import {connect} from 'react-redux'

class Home extends Component {

    //mostly just here to show an example of fetching dynamic data from
    //an endpoint using axios (: ) //THIS IS NOT WITH REDUX
    // state = {
    //     posts: [ ]
    // }
    // componentDidMount(){
    //     //asynchronous, could take a couple seconds, cant control
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //              console.log(res)
    //              this.setState({
    //                  posts: res.data.slice(0,10) //slice only grabs desired range, instead of all
    //              })
    //         })
    //     //this gives off a promise that the action will eventually be completed
    // }

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