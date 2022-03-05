import React, { useCallback, useState } from 'react';
import Child from './Child';

function Parent(props) {
    const [countone,setCounterOne]=useState(0)
    const [counttwo,setCounterTwo]=useState(0)
    const getItems=useCallback(()=>{
        console.log("counttwo+1",counttwo+1)
        console.log("counttwo-1",counttwo-1)
        for(let i=0;i<1000000;i++){
 
        }
         return [counttwo+1,counttwo-1]
     },[counttwo])
//    const getItems=()=>{
//        console.log("counttwo+1",counttwo+1)
//        console.log("counttwo-1",counttwo-1)
//        for(let i=0;i<1000000;i++){

//        }
//         return [counttwo+1,counttwo-1]
//     }
    return (
        <div>
            <button onClick={()=>setCounterOne(countone+1)}>Count One :{countone}</button>
            <button onClick={()=>setCounterTwo(counttwo+1)}>Count Two :{counttwo}</button>
            <Child getItems={getItems}></Child>
        </div>
    );
}

export default Parent;