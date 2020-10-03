import React, { Component } from 'react';
import CubeFace from './CubeFace';

class Cube extends Component {
    state = {
        faces: ['front','right','left','top','bottom','back']
    }
    
    generateFaces = () => {
        return this.state.faces.map( face => {
            <CubeFace />   
        })
    }

    render(){
        return (
            <div class="cube">
                {this.generateFaces()}
            </div>
        )
    }
}

export default Cube;