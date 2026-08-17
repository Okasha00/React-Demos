import React from 'react'

function Greeting(props) {

    return (
        <h3>Hello, {props.username}, You are {props.age} year old</h3>

    );
    
}

export default Greeting;