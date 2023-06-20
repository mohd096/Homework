// this will rernder the floor plan component
import React, { Component } from 'react'
import "./App.css";
import FloorPlan from "./FloorPlan";



export default class CodeSandbox extends Component {
  render() {

    return (
      <div className="CodeSandbox">
        <FloorPlan />
      </div>
    );
  }
}


// export default CodeSandbox;
















// import React, { Component } from 'react'
// import Bedroom from './Bedroom'

// export default class CodeSandbox extends Component {
//   render() {
//      const allBedroom = this.props.post.bedrooms.map (
//         bedroom => (
//           // I can call another component multiple times with different set of data
//           <Bedroom bedroom= {bedroom}/>
//         )
//     )
//        return(
//          <div>
//            <h1>Code SandBox</h1>
//            <div>{this.props.post.kitchen}</div>
//            <div>{this.props.post.LivingRoom}</div>
   
//            <h2>Bedroom:</h2>

//            {allBedroom}
   
     
//          </div>
//     )
//   }
// }


// import React, {Component} from "react"
// import Bedroom from './Bedroom';
// export default class App extends Component{
//     render(){
//     const allBedroom = this.props.post.bedrooms.map (
//         bedroom => (
//           // I can call another component multiple times with different set of data
//           <Bedroom bedroom= {bedroom}/>
//         )
//     )
//        return(
//          <div>
//            <h1>Code SandBox</h1>
//            <div>{this.props.post.kitchen}</div>
//            <div>{this.props.post.LivingRoom}</div>
   
//            <h2>Bedroom:</h2>

//            {allBedroom}
   
     
//          </div>
         
//        )
//      }
//     }

// function CodeSandbox(props) {
//   return (
//     <div>
//       <h1>CodeSandbox</h1>
//     </div>
//   );
// }

// Must export the component's function (or class)
// export default CodeSandbox;