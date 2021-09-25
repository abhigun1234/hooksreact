import axios from 'axios';
import React, { useEffect, useState } from 'react';

function HooksApicourse(props) {
    const [courses, setCourse] = useState([])
    useEffect(() => {

        axios.get('https://dronaonlineadmin.herokuapp.com/courses/').then(res => {

            console.log("res", res)
            setCourse(res.data.courseDetails)
        }).catch(error => {
            console.log("error", error)
        })
    })

    return (
        <div>
            data
            <ul>
                {
                    courses.map(course =>  <li>{course.name}</li> )
                    

                }
            </ul>
        </div>
    );
}

export default HooksApicourse;