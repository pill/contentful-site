import React, { Component } from "react"
import ReactDOM from "react-dom"
import Navigation from "./navigation"

class MainContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <h1>Phil's Site</h1>
      </div>

    );
  }
}
export default MainContainer