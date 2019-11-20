import React, { Component } from 'react'

export default class Shield extends Component {
  render(){
    const {
      width,
      height,
      source,
      alt,
      onClickShield,
    } = this.props
    return (
      <div className="house-shield" style={{textAlign: "center"}} onClick={onClickShield}>
        <img
          className="house-shield-img"
          width={width}
          height={height}
          src={source}
          alt={alt}>  
        </img>
      </div>
    );
  }
}