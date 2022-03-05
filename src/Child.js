import React, { useEffect, useState } from 'react';

function Child({getItems}) {
    const [items,setItems]=useState([])
    useEffect((()=>{setItems(getItems)}),[getItems])
    return (
        <div>
          {
              items.map(item=>{
                  <div>{item}</div>
              })
          }
        </div>
    );
}

export default Child;