import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UseEffectApi(props) {
    const [users, setData] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/').then(res => {

            console.log("res", res)
            setData(res.data)
        }).catch(error => {
            console.log("error", error)
        })
    })
    return (
        <div>
            < ul>{
                users.map(user =>
                    <div>
                    <li>{user.title}</li>
                  
                    </div>
                )
            }</ul>
        </div>
    );
}

export default UseEffectApi;