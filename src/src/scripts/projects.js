import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/projects.css'

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            tag: props.tag,
            link: props.link,
            description: props.description,
        }
    }
    render() {
        return <div id={this.state.tag} className={"Projects"}>
                    <div id="leftblock">
                    <div id="namediv">
                        <h1 >{this.state.name}</h1>
                    </div>
                    <div id="linkdiv">
                        <a href={this.state.link}>GITHUB LINK</a>
                    </div>
                    </div>
                    <div>
                    <div id="descriptiondiv">
                        <h1 >{this.state.description}</h1>
                    </div>
                    </div>
                </div>;
    }
}

export default Projects;