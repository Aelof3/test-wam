import React, { Component } from 'react';

class BlockFace extends Component {
    render(){
        return (
            <div className={`block__face block__face--${this.props.face}`}>
                <img alt="" src={this.props.texture} />
            </div>
        )
    }
}

export default BlockFace;