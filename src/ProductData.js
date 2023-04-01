import React, { useState } from 'react';

function ProductData(props) {
    const[productName,setProduct]=useState("maggie")
    function setProductData(){
        setProduct("nestle")
    }
    return (
        <div>
            {productName}
            <button onClick={setProductData}>chamge Product Name</button>
        </div>
    );
}

export default ProductData;