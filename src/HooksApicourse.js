import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
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
           
           <Table className="table">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                        <th>description</th>
                    
                    </tr>
                </thead>
                <tbody>

                    {

products.map((product)=>{

                        return(<tr >
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                           
                        </tr>)
                     })
                    }
                 

                </tbody>

            </Table>

        </div>
    );
}

export default React.memo(HooksApicourse)