import React from "react";
import axios from "axios";

import Display from "./../display/display.component";
import Keys from "./../keys/keys.component";

import "./calculator.styles.scss";

class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      result: []
    };
  }

  handleClick = key => {
    if (key === "=") {
      this.calculate();
    } else if (key === "C") {
      this.clearAll();
    } else if (key === "CE") {
      this.backOne();
    } else {
      console.log(this.state.result);
      this.setState({
        result: this.state.result + key
      });
      console.log(this.state.result);
    }
  };

  calculate = () => {
    let { result } = this.state;
    axios
      .post("https://react-node-calculator.herokuapp.com/calculate", { result })
      .then(res => {
        console.log(res);
        let data = "" + res.data; //convert back to string from int
        this.setState({
          result: data
        });
      })
      .catch(err => {
        this.setState({
          result: ["Error"] //This stores as an array so backOne would clear "Error" in one go.
        });
      });
  };

  clearAll = () => {
    this.setState({
      result: [] //reset state to an empty array
    });
  };

  backOne = () => {
    this.setState({
      result: this.state.result.slice(0, -1) //chop the last element in an array
    });
  };

  render() {
    return (
      <div className="calculator">
        <Display result={this.state.result} />
        <Keys onClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
