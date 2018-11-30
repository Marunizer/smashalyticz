import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About = (props) => {
    console.log(props);

    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nobis nesciunt quis? Porro corrupti dolorem ipsum. Dolorem, necessitatibus delectus? Autem praesentium deleniti eum veritatis maiores, officia tenetur recusandae facere cupiditate.</p>
        </div>
    )
}

export default Rainbow(About);