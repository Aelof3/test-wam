import React, { Component } from 'react';
import BlockFace from './BlockFace';
import Mole from '../mole/Mole';

class Block extends Component {
    
    state = {
        hover: false,
        className: "cube__face--section"
    }

    handleOnMouseOver = (b) => {
        this.setState({
            className: b ? "cube__face--section cube__face--section--hover" : "cube__face--section"
        })
    }

    render(){
        const block_faces = this.props.faces.map( (face,i) => {
            const t = ( i !== 5 ) ? this.props.faceTextures[this.props.textures[1]] : this.props.faceTextures[this.props.textures[0]];
            return (
                <BlockFace 
                    key={btoa(face)}
                    face={face} 
                    texture={t} 
                />
            )
        })
        return (
            <div 
/*                 onMouseOut={()=>this.handleOnMouseOver(false)}
                onMouseOver={()=>this.handleOnMouseOver(true)} */
                className={this.state.className}
            >
                <div className="block">
                    {block_faces}
                </div>
                <Mole mole={this.props.moles[this.props.i]} />
            </div>
        )
    }
}

export default Block;