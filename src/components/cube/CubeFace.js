import React, { Component } from 'react';
import marios from '../../js/marios';
import textures from '../../js/textures';
import Block from './Block';

class CubeFace extends Component {
    state = {
        marios: [],
        faces: ['front','right','left','top','bottom','back'],
        textures: textures
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
                    textures={this.state.textures} 
                    marios={this.state.marios} 
                />
            )
        })
        
    }
    
    componentDidMount(){
        const numbers = Array(marios.length).fill().map((_, index) => index);
        numbers.sort(() => Math.random() - 0.5);
    
        const moleList = numbers.slice(0,9);
        
        this.setState({
            marios: moleList.map( n => marios[n] )
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