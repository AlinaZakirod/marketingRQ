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
      <div className="carousel">
        <h2>Features properties</h2>
        <div class="movingElements">
          <div className="propertySlide">
            <img src=" " />
            <h3>Property name 1</h3>
            <p>Address 1</p>
          </div>

          <div className="propertySlide margin-2">
            <img src=" " />
            <h3>Property name 2</h3>
            <p>Address 2</p>
          </div>

          <div className="propertySlide  margin-2">
            <img src=" " />
            <h3>Property name 1</h3>
            <p>Address 1</p>
          </div>

          <div className="propertySlide  margin-2">
            <img src=" " />
            <h3>Property name 1</h3>
            <p>Address 1</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
