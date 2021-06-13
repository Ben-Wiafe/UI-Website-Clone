import React from 'react'
import ReactDOM from 'react-dom'


function Welcome(props) {
    return <h4>Hello, {props.name}</h4>;
}

const New = () => {
    return (
        <div>
            <Welcome name = "Sara"/>
            <Welcome name = "Bernard"/>
            <Welcome name = "Levevu" />
        
        </div>
    )
}
ReactDOM.render(<New/> , document.getElementById("root"));

export default New
