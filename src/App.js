import React, { Component } from "react";
import "./style.scss";
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
