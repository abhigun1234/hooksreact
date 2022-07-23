import React, { useReducer } from 'react';
const intialState=0
const reducer=(state,action)=>{

    console.log("state",state)
    console.log("action",action)
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return intialState
        case 'statemul':
            return state+3
        default:
            return state

    }
}
function UsereducerHooks(props) {
    // const [count,dispatch]=useReducer(reducer,intialState)
//  step1
     const [count,dispatch]=useReducer(reducer,intialState)
    return (
        <div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button  onClick={()=>dispatch('decrement')}>Decrement</button>
            <button  onClick={()=>dispatch('reset')}>Reset</button>
            <button  onClick={()=>dispatch('statemul')}>Mul</button>
                {/* <button >Increment</button>
            <button  >Decrement</button>
            <button  >Reset</button> */}
             count {count}
        </div>
    );
}

export default UsereducerHooks;

