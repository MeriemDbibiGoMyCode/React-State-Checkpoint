import React, { Component } from "react";
import profil from "./Components/profil.jpg";

class Checkpoint extends Component {
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
  styles = {
    fontStyle: "bold",
    color: "teal",
  };
  stylesProf = {
    fontStyle: "italic",
    color: "purple",
  };
  // Person ={ fullName,bio, imgSrc, profession} and a boolean shows.
  // render
  render() {
    return (
      <div className="App">
        <h2 style={this.styles}> {this.state.person.fullName} </h2>
        <h3 style={this.stylesProf}>{this.state.person.profession}</h3>
        <p>{this.state.person.bio}</p>
        <img
          style={{ width: "80px", height: "100px" }}
          src={this.state.person.imgSrc}
          alt=""
        />
      </div>
    );
  }
}
export default Checkpoint;
