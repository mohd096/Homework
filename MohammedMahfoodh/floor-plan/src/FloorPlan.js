import React, { Component } from 'react'
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bathroom from "./Bathroom";

export default class FloorPlan extends Component {
    render() {

    return (
      <div>
        <Bedroom bedroom={1} />
        <Kitchen/>
        <Bathroom size={"Full"} />
        <Bedroom bedroom={2} />
        <LivingRoom />
        <Bathroom size={"Half"} />
        <Bedroom bedroom={3} />
      </div>
    );
  }
}