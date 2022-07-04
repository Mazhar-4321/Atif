import React, { useState } from 'react';
import { Formik } from 'formik';
import Select from 'react-select'

  
const BasicExample = () =>{
const [data,setData]=useState([
   
    
]
);
const deleteItems=(e)=>
{
let key = e.target.id;
   let tempData=[...data]
    tempData=tempData.filter(e=>e.key!=key)
    setData(tempData)
}
const changeInput=(e)=>
{
    let tempdata=[...data];
    console.log(e.key);
    tempdata=tempdata.filter((el)=>
    {
        if(e.key===el.key)
        {
            el.selectedValue=e.value;
        }
        return el;
    })
    setData(tempdata)

}
 const setNewData=()=>
 {
    let b=[...data];
    console.log(b.length)
    //console.log(b);
    let random=Math.random();
    b.push({
        "key":random+"",
        "name":"achajcabv",
         "selectedValue":'',
        "options":[
            { value: 'chocolate',key:random, label: 'Chocolate',d:'chocolate' },
    { value: 'strawberry',key:random, label: 'Strawberry',d:'' },
    { value: 'vanilla',key:random, label: 'Vanilla',d:'' }
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
 {data.length>0? data.map((e,i)=>{
    return <div key={e.key} id="container">
    <Select id={i} key={e.key} onChange={changeInput} options={e.options} defaultInputValue={e.selectedValue}  />
    
    <button type="submit" id={e.key} name={i} value={i} onClick={deleteItems}>x</button>
     {/* <Formik
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
    </Formik> */}
   
    </div>

 }):''}
    
    <button onClick={setNewData}>Add Debit Account </button>
  </>
  )


};
export default BasicExample;
