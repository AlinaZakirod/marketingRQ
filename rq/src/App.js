import React, { Component } from "react";
import "./App.css";

import Carousel from "./components/Carousel";
import Info from "./components/Info";
import Banner from "./components/Banner";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />

        <div className="content">
          <Carousel />
          <Info />
        </div>
      </div>
    );
  }
}

export default App;
