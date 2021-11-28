import React, { useEffect, useState } from 'react';
import ChangeState from './ChangeState';
import axios  from 'axios';
import react from 'react';
function UseEffectHook(props) {
    const[courses,setCourse]=useState([])
    useEffect(()=>{

        // document.title=`You clicked ${count} times`
        axios.get('https://dronaonlineadmin.herokuapp.com/courses/').then(res=>{
            console.log("res",res)

            setCourse(res.data.courseDetails)

        })
    })
 
    // useEffect(()=>{
    //     document.title=`You clicked ${count} times`
    // })
    // function ChangeState(){

    //     document.title=`You clicked ${count} times`
    // }
    return (
        
        <div>
        < ul>{
            courses.map(course =>
                <react.Fragment>
                <li>{course.name}</li>
                <li>{course.fees}</li>
                </react.Fragment>
            )
        }</ul>
    </div>
    );
}

export default UseEffectHook;