import React, { Component } from 'react'

export default class OnClick extends Component {
    handleOnClick = (message)=>{
        alert(message)
    }
  render() {
    return (
      <div>
        <button onClick={this.handleOnClick.bind(this, 'button clicked')}>click me</button>
      </div>
    )
  }
}
