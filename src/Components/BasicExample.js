import React, { useState } from 'react';
import { Formik } from 'formik';
import Select from 'react-select'

  
const BasicExample = () =>{
const [data,setData]=useState([
   
    
]
);
const deleteItems=(e)=>
{
 var index=e.target.value;//2
 console.log(index)
 let tempData=[...data];
  let data1=[];
//  for(var i=0;i<tempData.length;i++) 
//  {
//     if(i!=index)
//     {
//         console.log(tempData[i])
//        data1.push(tempData[i])
//     }
//  }
data1= tempData.filter((e,i)=>{
   
   /*
      0,2
      1,2
      2,2
      3,2
   */
    return i!=index
});
console.log(data1)
setData(data1)
}
 const setNewData=()=>
 {
    let b=[...data];
    //console.log(b);
    b.push({
        "key":b.length,
        "name":"achajcabv",
        "options":[
            { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
        ]
    })
   
     setData(b)
    console.log(b)
   
        //  let a=[...data,b]
        //  console.log(a)
        //  setData(a)
 }
 return  ( 
 <>
    <h1>info</h1>
 {data.map((e,i)=>{
    return <div  id="container">
    <Select id="mazhar" options={e.options} />
     <Formik
      initialValues={{ name: e.name }}
    //   onSubmit={(values, actions) => {
    //     setTimeout(() => {
    //       alert(JSON.stringify(values, null, 2));
    //       actions.setSubmitting(false);
    //     }, 1000);
    //   }}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button type="submit" value={i} onClick={deleteItems}>Submit</button>
        </form>
      )}
    </Formik>
   
    </div>

 })}
    
    <button onClick={setNewData}>Add Debit Account </button>
  </>
  )


};
export default BasicExample;