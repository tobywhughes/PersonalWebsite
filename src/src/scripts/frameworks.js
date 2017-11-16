import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/frameworks.css'

class Frameworks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            tag: props.tag,
            side: props.side,
            image: props.image,
        }
    }
    render() {
        return <div id={this.state.tag} className={"Frameworks" + this.state.side}>
                    <div id="imagediv">
                        <img id={this.state.tag + "Image"} src={this.state.image} alt=''/>
                    </div>
                    <div id="textdiv">
                        <h1 >{this.state.name}</h1>
                    </div>
                </div>;
    }
}

export default Frameworks;