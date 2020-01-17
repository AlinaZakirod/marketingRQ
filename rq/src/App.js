import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Carousel from "./components/Carousel";
import Info from "./components/Info";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Carousel />
        <Info />
      </div>
    );
  }
}

export default App;
