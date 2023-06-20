import React, { Component } from 'react'
import Oven from "./Oven";
import Sink from "./Sink";

export default class Kitchen extends Component {
    render() {

    return (
      <div class= "Kitchen">
        Kitchen
        <Oven />
        <Sink />
      </div>
    );
  }
}