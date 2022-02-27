import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
        super(props)
          
       this.inputRef=React.createRef()
    //  this.state={
    //     hello:'Hello'
    //  }
      
    }
    componentDidMount(){
        console.log("this.inputRef",this.inputRef)
        this.inputRef.current.focus()
    }
    // changeText(){
    //     this.setState={
        
    //         hello='bye'
    //     }
    // }
    clickHandler=()=>{
        // alert("hello")
        alert(this.inputRef.current.value)
        console.log(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input ref={this.inputRef} type='text' />
                {/* <input type='text'/> */}
                <button onClick={this.clickHandler}>clickMe</button>
                {/* <button onClick={this.changeText}>change</button> */}
                {/* <label>{this.state.hello}</label> */}
            </div>
        );
    }
}

export default RefsDemo;