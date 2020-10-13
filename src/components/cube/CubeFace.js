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
                    i={i}
                    faces={this.state.faces} 
                    face={this.props.face}
                    faceTextures={this.state.faceTextures} 
                    textures={this.props.textures}
                    moles={this.props.moles}
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