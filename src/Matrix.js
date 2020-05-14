import React, { Component } from 'react';
import Cell from './Cell.js'
export default class Matrix extends Component {
  
  genRow = (vals) => {
    // console.log(vals) //array of colors
    return vals.map(<Cell value={val}/>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    // console.log(this.props.values) // array of arrays of colors
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}


Matrix.defaultProps = {
  values: (() => {
    const defaultRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defaultRow))
  })()
}

