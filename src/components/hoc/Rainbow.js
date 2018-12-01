import React from 'react'

//example of making higher order components
//just randomizing color of something as an example
//this is to add general features to components 
const Rainbow = (WrappedComponent) => {

    const colors = ['pink', 'green', 'yellow', 'red', 'black', 'blue'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const className =  randomColor + '-text';

    return(props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow;