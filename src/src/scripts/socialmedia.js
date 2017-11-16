import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/socialmedia.css'

class SocialMedia extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            tag: props.tag,
            link: props.link,
        }
    }
    render() {
        return <div id={this.state.tag} className={"SocialMedia"}>
                        <a href={this.state.link}>{this.state.name}</a>
                </div>;
    }
}

export default SocialMedia;