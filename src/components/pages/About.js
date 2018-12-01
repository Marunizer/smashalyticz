import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About = (props) => {
    console.log(props);

    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>example wrapping a higher order component over this About component to make my text perty</p>
        </div>
    )
}

export default Rainbow(About);