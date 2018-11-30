import React, {Component} from 'react';

class AddChallenge extends Component {
    state ={
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addChallenge(this.state) 
        this.setState({
             content: ''
        })
        console.log(this.state)
    }
    
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add a personal Challenge:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddChallenge