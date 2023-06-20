import React, {Component} from "react";

export default class Bedroom extends Component {
    render() {
        return(
            <div className="bedroom"id={`bed-${this.props.Bedroom}`}>Bedroom {this.props.bedroom}</div>
            
        )
    }
}

// import React from "react";

// class Bedroom extends React.Component {
//   render() {
//     return <div>Bedroom {this.props.bedNum}</div>;
//   }
// }

// export default Bedroom;