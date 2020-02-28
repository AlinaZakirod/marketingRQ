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
        <h2 className="App-title">Features properties</h2>
        <div class="movingElements">
          <div className="featuredProperty">
            Property name <p>Adress line</p>
            <img />
          </div>
          <div className="featuredProperty" id="middle">
            blah
          </div>
          <div className="featuredProperty">blah</div>
        </div>
      </div>
    );
  }
}

export default Carousel;
