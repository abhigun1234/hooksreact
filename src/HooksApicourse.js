import axios from 'axios';
import React, { useEffect, useState } from 'react';

function HooksApicourse(props) {
    const [products, setProduct] = useState([])
    useEffect(() => {

        axios.get('https://justolearnapp.herokuapp.com/api/addproduct').then(res => {

            console.log("res", res)
            setProduct(res.data.result)
            console.log("courses",products)
        }).catch(error => {
            console.log("error", error)
        })
    })

    return (
        <div>
           
            <ul>
                {
                     products.map(product =>  <li>{product.name}</li> )
                    
                    //  products.forEach((product) => {
                    //     // names.push(<h3 className='student_name'>{data.name}</h3>)
                    //     product =>  <li>{product.name}</li>
                    //   })
                }
            </ul>
        </div>
    );
}

export default HooksApicourse;