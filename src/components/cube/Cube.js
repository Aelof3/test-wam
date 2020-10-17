import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CubeFace from './CubeFace';
import MOLE_CONTEXT from '../context/MoleContext';

class Cube extends Component {
    static contextType = MOLE_CONTEXT;
    
    generateFaces = () => {
        return this.context.faces.map( face => {
            const moles = this.context.moles.filter( mole => this.context.moleLayout[face].moles.includes(mole.i) );
            return (
                <CubeFace 
                    key={btoa(face)} 
                    face={face} 
                    textures={this.context.textures[face]} 
                    moles={moles}
                />
            )
        })
    }

    render(){
        return (
            <div className="scene">
                <div className={`cube ${this.context.prefaceClass ? 'preface':''} show-${this.props.cubeFace}`}>
                    {this.generateFaces()}
                </div>
            </div>
        )
    }
}

export default withRouter(Cube);