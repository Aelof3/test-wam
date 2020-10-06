import React, { Component } from 'react';
import faces from '../../js/faces';
import Block from '../block/Block';

class CubeFace extends Component {
    state = {
        marios: [],
        faces: ['front','right','left','top','bottom','back'],
        faceTextures: faces
    }
    getRandomInt = (min,max) => {
        return Math.floor(Math.random() * max + min);
    }

    generateBlocks = () => {
        return Array(9).fill().map( (n,i)=> {
            return (
                <Block 
                    key={btoa(`${this.state.faces[n]}${i}`)}
                    faces={this.state.faces} 
                    faceTextures={this.state.faceTextures} 
                    marios={this.state.marios} 
                    textures={this.props.textures}
                />
            )
        })
        
    }

    render() {
        return (
            <div className={`cube__face cube__face--${this.props.face}`}>
                {this.generateBlocks()}
            </div>            
        )
    }
}

export default CubeFace;