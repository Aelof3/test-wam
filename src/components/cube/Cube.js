import React, { Component } from 'react';
import CubeFace from './CubeFace';

class Cube extends Component {
    state = {
        faces: ['front','right','left','top','bottom','back']
    }
    
    generateFaces = () => {
        return this.state.faces.map( face => {
            return (<CubeFace key={btoa(face)} face={face}/>)
        })
    }

    render(){
        return (
            <div style={this.props.style} className="cube">
                {this.generateFaces()}
            </div>
        )
    }
}

export default Cube;