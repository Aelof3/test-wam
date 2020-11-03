import React, { Component } from 'react';
import faceTextureFile from '../../js/faces';
import Block from '../block/Block';
import MOLE_CONTEXT from '../context/MoleContext';

class CubeFace extends Component {
    static contextType = MOLE_CONTEXT;

    state = {
        faceTextures: faceTextureFile
    }

    getRandomInt = (min,max) => {
        return Math.floor(Math.random() * max + min);
    }

    generateBlocks = () => {
        if (!this.props.textures) return;
        return Array(9).fill().map( (n,i)=> {
            return (
                <Block 
                    key={btoa(`${this.context.faces[n]}${i}`)}
                    i={i}
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