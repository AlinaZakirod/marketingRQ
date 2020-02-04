import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Carousel from "./components/Carousel";
import Info from "./components/Info";
import MainPage from "./components/MainPage";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainPage />
        <Header />

        <Carousel />
        <Info />
      </div>
    );
  }
}

export default App;
