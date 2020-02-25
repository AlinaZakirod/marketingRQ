import React, { Component } from "react";

class Carousel extends Component {
  playCarousel() {
    let x = document.getElementsByClassName("mySlides");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  }
  render() {
    return (
      <div>
        <p>Carousel</p>
        <p>Features properties</p>
        <img
          className="mySlides"
          src="../../images/amoon-ra-laY6t1sagU8-unsplash.jpg"
        />
        <img
          className="mySlides"
          src="../../images/anmol-seth-hDbCjHNdF48-unsplash.jpg"
        />
        <img
          className="mySlides"
          src="../../images/apartment-architecture-cabinets-chairs-533157.jpg"
        />
      </div>
    );
  }
}

export default Carousel;
