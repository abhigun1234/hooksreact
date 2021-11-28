import React, { Component } from 'react';

class StateDemoClass extends Component {
    constructor(){
         super()
        this.state={name:'ravi'}
    }
    changeName(_name){

        this.setState({name:_name})
    }
    render() {
        return (
            <div>
              state demo  
              {this.state.name}
              <button onClick={()=>this.changeName('ram')}>changeName</button>
            </div>
        );
    }
}

export default StateDemoClass;