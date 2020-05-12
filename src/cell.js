import React, { Component } from 'react';

export default class Cell extends Component {

    state = {
        color: this.props.value
        
    }

    render() {
        let handleClick = (e) => {
            this.setState({color: '#333'})
        }
        return <div className="cell" style={{backgroundColor: this.state.color}} onClick={handleClick}></div>
    }
}