import React, { useState } from 'react';

function UseStateHooksDemo(props) {
 
// useState
   const [count,setCounterOfData]=useState(1)
   const [name,setName]=useState("raj")
   const [fruits,setFruits]=useState(["mango","banana","apple"])
   const [persons,setPerson]=useState([{name:"ram",city:"pune"},{name:"raj",city:"mumbai"}])
   
   
 const  setCounterData=()=>{

         setCounterOfData(count+1)
   }
   const  setNameData=(name)=>{

    setName(name)
}

const  setFruitsAdd=()=>{
    
        fruits.push("sweetLime")
        console.log("fruits",fruits)
    setFruits(fruits)
}


    return (
        <div>
            {count}  
            <button onClick={()=>setCounterData()}>setCounter</button>   
            <br></br>
            {name}      
            <button onClick={()=>setNameData("ramesh")}>setName</button>   

            <h1>
                list of fruits
            
                    {
                        fruits.map(fruit=>
                            <ul>
                                <li>
                                    {fruit}
                                </li>
                            </ul>
                            )
                    }
             
            </h1>
            
            <h1>
                list of Voters
            
                    {
                        persons.map(person=>
                            <ul>
                                <li>
                                    {person.name}
                                </li>
                                <li>
                                    {person.city}
                                </li>
                            </ul>
                            )
                    }
             
            </h1>
            <button onClick={()=>setFruitsAdd()}>setFruits</button>
        </div>
    );
}

export default UseStateHooksDemo;