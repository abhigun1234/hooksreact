import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props){

        super(props)
        this.state={name:'abhi'}
        this.setName=this.setState.bind(this)
    }
    setName(){
        alert("hello")
       this.setState({name:'ravi'})
    }
    render() {
        return (
            <div>
                <label>{this.state.name}</label>
                <button onClick={this.setName}>click</button>
            </div>
        );
    }
}

export default ClassComponent;