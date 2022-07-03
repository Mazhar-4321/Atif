import React, { useState } from "react";
function W3School(props) {
    const [items,setItems]=useState(['1','2','3'])

    const changeItems=()=>
    {
        const m = [...items,9];
        setItems(m);
    }
    return (
        <>
        <ul>
        {items.map((e) => {
            return <li>{e}</li>
        
        }
        )}
      </ul>
      <button onClick={changeItems}>Click</button>
      </>
    );
   
  }
  

  export default W3School;