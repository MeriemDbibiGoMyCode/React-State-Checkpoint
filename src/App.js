import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Checkpoint from "./Checkpoint";
import profil from "./Components/profil.jpg"

class App extends Component {
   // Constructor
   constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Meriem Dbibi",
        bio: "Diplômée de l'ESPRIT, je suis à la recherche d'une opportunité professionnelle dans le domaine de l'informatique pour mettre à proﬁt mes compétences acquises durant ma formation universitaire et mes expériences professionnelles.",
        imgSrc: profil,
        profession: "Ingénieur en Informatique",
      },
    show: true,
    timer: 0,
    intervall: null,
    };
  }
  //partie compoenent life cycle
  componentDidMount() {
    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      )
    });
  }
  ButtonChange = () => {
    this.setState({
    show: !this.state.show})
  };

  render() {
    return (
      <div className="App">
       <button  style={{ width: "90px", height: "30px" }} onClick={this.ButtonChange}>
        {this.state.show ? 'Hide':'Show'}
        </button>
        {this.state.show ?  this.state.show && <><p>{this.state.timer}</p> <Checkpoint/> </>: null} 
      </div>
    );
  }
}
export default App;
