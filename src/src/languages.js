import React from 'react';
import ReactDOM from 'react-dom';
import './languages.css'

class Languages extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            tag: props.tag,
            image: props.image,
        }
    }
    render() {
        return <div id={this.state.tag} className="languages">
                    <div className="imagediv">
                        <img className={this.state.tag + "Image"} src={this.state.image} alt=''/>
                    </div>
                    <div id="textdiv">
                        <h1 >{this.state.name}</h1>
                    </div>
                    <div className="imagediv">
                        <img className={this.state.tag + "Image"} src={this.state.image} alt=''/>
                    </div>
                </div>;
    }
}

export default Languages;