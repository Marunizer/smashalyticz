const initState = {
    posts : [
        //dummy data
        {id: '1', title: 'Mario', body: 'good guy'},
        {id: '2', title: 'Sonic', body: 'fast guy'},
        {id: '3', title: 'Pikachu', body: 'shocking'}
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action)
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;