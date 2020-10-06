import React, { Component } from 'react';
import BlockFace from './BlockFace';

class Block extends Component {
    
    state = {
        sideTexture: 24,
        topTexture: 35,
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
            const t = ( i !== 5 ) ? this.props.textures[this.state.sideTexture] : this.props.textures[this.state.topTexture];
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
                onMouseOut={()=>this.handleOnMouseOver(false)}
                onMouseOver={()=>this.handleOnMouseOver(true)}
                className={this.state.className}
            >
                <div className="block">
                    {block_faces}
                </div>
            </div>
        )
    }
}

export default Block;