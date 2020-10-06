import React, { Component } from 'react';
import CubeFace from './CubeFace';

class Cube extends Component {
    state = {
        faces: ['front','right','left','top','bottom','back'],
        textures: {
            front: [0,1],
            right: [2,3],
            left: [4,5],
            top: [6,7],
            bottom: [8,9],
            back: [10,11]
        }
    }
    
    generateFaces = () => {
        return this.state.faces.map( face => {
            return (<CubeFace key={btoa(face)} face={face} textures={this.state.textures[face]}/>)
        })
    }

    render(){
        return (
            <div className={`cube show-${this.props.cubeFace}`}>
                {this.generateFaces()}
            </div>
        )
    }
}

export default Cube;