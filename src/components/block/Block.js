import React, { Component } from 'react';
import BlockFace from './BlockFace';
import Mole from '../mole/Mole';
import MOLE_CONTEXT from '../context/MoleContext';

class Block extends Component {
    static contextType = MOLE_CONTEXT;
    
    state = {
        hover: false,
        className: "cube__face--section"
    }

    handleOnMouseOver = (b) => {
        this.setState({
            className: b ? "cube__face--section cube__face--section--hover" : "cube__face--section"
        })
    }

    generateBlockFaces = () => {
        return this.context.faces.map( (face,i) => {
            const t = ( i !== 5 ) ? this.props.faceTextures[this.props.textures[1]] : this.props.faceTextures[this.props.textures[0]];
            return (
                <BlockFace 
                    key={btoa(face)}
                    face={face} 
                    texture={t} 
                />
            )
        })
    }

    render(){
        return (
            <div 
                onClick={()=>this.context.bonkMole(this.props.moles[this.props.i])}
                className={this.state.className}
            >
                <div className="block">
                    {this.generateBlockFaces()}
                </div>
                <Mole mole={this.props.moles[this.props.i]} />
            </div>
        )
    }
}

export default Block;