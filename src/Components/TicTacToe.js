import React from "react"
import { Component } from "react";
import { Table } from "react-bootstrap";

// class TicTacToe extends Component
// {
//     constructor()
//     {
//         super();
//         this.state=
//         {
//             i:0
//         };
//     }
//     refactor()
//     {

//     }
//     set1()
//     {
//         this.setState(
//             {
//                 i :(this.state.i)+1
//             }
//         )
//     }
//     change(e)
//     {
//         var element = document.getElementById(e);
//         console.log(this.i);
//          if( (this.state.i)%2==0)
//          {
//             element.innerText='X';
//             this.set1()
            
//          }
//          if((this.state.i)%2==1)
//          {
//              element.innerText='O';
//              this.set1()
//          }
//          if((this.state.i)==9)
//          {

//          }
       
//     }
//     render()
//     {
//         return(
//             <div>
//                <Table  style={{ tableLayout:"fixed", fontSize:'100px' , margin:'100px' , width: '250px',height:'250px'}  } bordered variant="dark">
//                    <tbody  >
//                        <tr style={{ verticalAlign:"middle", textAlign:'center'}}>
//                            <td id="00" onClick={()=>this.change('00')}></td>
//                            <td id="01" onClick={()=>this.change('01')}></td>
//                            <td id="02" onClick={()=>this.change('02')}></td>
//                        </tr>
//                        <tr style={{ verticalAlign:"middle", textAlign:'center'}}>
//                            <td id="10" onClick={()=>this.change('10')}></td>
//                            <td id="11" onClick={()=>this.change('11')}></td>
//                            <td id="12" onClick={()=>this.change('12')}></td>
//                        </tr>
//                        <tr style={{verticalAlign:"middle", textAlign:'center'}}>
//                            <td id="20" onClick={()=>this.change('20')}></td>
//                            <td id="21" onClick={()=>this.change('21')}></td>
//                            <td id="22" onClick={()=>this.change('22')}></td>
//                        </tr>
//                    </tbody>
//                </Table>
//             </div>
//         )
//     }
// }
const TicTacToe=()=>
{
    return <h1>Hi</h1>
}
export default TicTacToe