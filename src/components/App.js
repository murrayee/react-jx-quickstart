import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    text: "123"
  };

  componentDidMount() {
    axios
      .get("http://foxcore.jx-staging.zxy5.xyz/weatherforecast")
      .then(res => {
        this.setState({
          text: res.data
        });
      });
  }
  render() {
    return <div className="App">hello world {this.state.text}</div>;
  }
}

export default App;
