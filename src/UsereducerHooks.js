import React, { useReducer } from 'react';
const intialState=0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return intialState
        default:
            return state

    }
}
function UsereducerHooks(props) {
    const [count,dispatch]=useReducer(reducer,intialState)
    return (
        <div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button  onClick={()=>dispatch('decrement')}>Decrement</button>
            <button  onClick={()=>dispatch('reset')}>Reset</button>

             count {count}
        </div>
    );
}

export default UsereducerHooks;

