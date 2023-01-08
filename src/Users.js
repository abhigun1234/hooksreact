import React, { Component } from 'react'

export default class Users extends Component {

    constructor(){
        super()
        this.state={name:"raj"}
        this.setName=this.setName.bind(this)
    }
    setName(){
       console.log("this",this)
        this.setState({name:"ramesh"})
    }
  render() {
    return (
      <div>Users{this.state.name}
      <button onClick={this.setName}>setName</button>
      </div>
    )
  }
}
