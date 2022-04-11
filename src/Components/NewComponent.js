import React, { Component } from "react";
import bell1 from "./bell1.jpg";
import bell2 from "./bell2.png";

class NewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Subscribe to Simply Learn",
      sub: "Subscribe",
      imageURL: bell1,
    };
  }

  styles = {
    fontStyle: "italic",
    color: "purple",
  };
  ButtonChange = () => {
    this.setState({
      message: "this is an update",
      sub: "Subscribed",
    });
  };
  imageChange = () => {
    this.setState({
      imageURL: bell2,
      message:"thank u happy learning"
    });
  };
  render() {
    return (
      <div className="App">
        <h3 style={this.styles}> {this.state.message} </h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <img
          style={{ width: "30px", height: "30px" }}
          src={this.state.imageURL}
          alt=""
          onClick={this.imageChange}
        />
      </div>
    );
  }
}
export default NewComponent;
