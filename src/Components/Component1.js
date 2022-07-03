import { Accordion, Alert, Badge, Button } from "react-bootstrap";
import React from "react"
import {Component} from "react"
import AccordionItem from "react-bootstrap/esm/AccordionItem";
// class Masti extends Component
// {
   
//     constructor(props)
//     {
//         super(props);
//         this.state=
//         {
//             i:0,
//             visibility:false,
//             c:0
//         };
//     }
//     setShow=(e)=>
//     {
        
//           if(e &&this.state.c==0)
//           {
//             this.setState(
//                 {
//                     visibility:true,
//                     c:1
//                 }
//             )
//               setTimeout(()=>
//               {
//                 this.setState(
//                     {
//                         visibility:false
//                     }
//                 )
                
//               },2000)

            
//           }
         
//     }
//     myFunction =()=>
//     {
//           alert("ppp")
//     }
//     changeText=()=>
//     {
//          this.setState(
//              {
//                  i:this.state.i+1
//              }
//          );
//     }
//     render()
//     {
//         return (
//             <div>
//        <Button onClick={()=>this.setShow(true)} variant="primary">{this.state.i}</Button>
       
//        {
//        this.state.visibility && <Alert variant="danger" onClose={()=>this.setShow(false)} dismissible>This is Text 1</Alert>
//     }
//        <Accordion>
//            <Accordion.Item>
//                <Accordion.Header>Header</Accordion.Header>
//                <Accordion.Body>lorem ipsum </Accordion.Body>
//            </Accordion.Item>
//        </Accordion>
//        <h1>Mazhar <Badge bg="secondary">M</Badge></h1>
//        </div>
//         );
//     }
// }
const Component1=()=>
{
    return <h1>Hi</h1>
}
export default Component1;