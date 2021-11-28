import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UseEffectApi(props) {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        axios.get('https://dronaonlineadmin.herokuapp.com/courses/').then(res => {

            console.log("res", res)
            setCourses(res.data.courseDetails)
        }).catch(error => {
            console.log("error", error)
        })
    })
    return (
        <div>
            < ul>{
                courses.map(course =>
                    <div>
                    <li>{course.fees}</li>
                  
                    </div>
                )
            }</ul>
        </div>
    );
}

export default UseEffectApi;