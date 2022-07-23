import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UseEffectHooksDemo(props) {
   const [courseArr,SetCourse]= useState([])
    useEffect(()=>{

        axios.get("http://localhost:3000/api/addcourse/").then(response=>{

            SetCourse(response.data.result)
                    
        
        }
        
        // <ul>
        //     <li>{response}</li>
        // </ul>
          
        )
    })
    return (
        <div>
            UseEffectdemo
            <div>
             
                {

courseArr.map(course=>
    <div>
    <img src={course.courseImg}></img>
    <ul>
<li>
  {
    course.name
  }

</li>

    </ul>
    </div>
    )
                }

                
            </div>
        </div>
    );
}

export default UseEffectHooksDemo;