import React from "react";
import "./App.css";
import Button from "./button.component";
import ScientificCalculator from "./scientific-calculator.page";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCalc: "",
      history: [],
    };
  }

  handleClick = (e) => {
    console.log(e.target.innerHTML, "clicked");
    const lastChar = this.state.currentCalc[this.state.currentCalc.length - 1];
    if (e.target.innerHTML === "C") {
      this.setState({ currentCalc: "" });
      return;
    }
    if (e.target.innerHTML === "+/-") {
      console.log("+- called");
      const string = this.state.currentCalc;
      let result = true;
      if (string === "") return;
      if (
        string.includes("+",1) || //Start searching from 0 to exclude the sign at the 0th index which indicates number is positive/negative
        string.includes("-",1) ||
        string.includes("x",1) ||
        string.includes("÷",1) ||
        string.includes("%")
      ) {
        result = false;
      }
      if (result)
        this.setState({
          currentCalc: `${parseInt(string, 10) * -1}`,
          history: [
            ...this.state.history,
            this.state.currentCalc + " x -1 = " + parseInt(string, 10) * -1,
          ],
        });
      else return;
    } else if (e.target.innerHTML === "=") {
      console.log("EVALUATING");
      const string = this.state.currentCalc
        .replace(/÷/g, "/")
        .replace(/x/g, "*")
        .replace(/%/g, "/100 * ");
      let result;
      try {
        result = eval(string);
      } catch (error) {
        return this.setState({ currentCalc: "Error" });
      }
      console.log(result);
      this.setState({
        currentCalc: `${result}`,
        history: [
          ...this.state.history,
          this.state.currentCalc + " = " + result,
        ],
      });
    } else if (
      (e.target.innerHTML === "+" ||
        e.target.innerHTML === "-" ||
        e.target.innerHTML === "x" ||
        e.target.innerHTML === "/" ||
        e.target.innerHTML === "-") &&
      this.state.currentCalc.length === 0
    ) {
      console.log("Cannot use a symbol first");
      return;
    } else if (
      (e.target.innerHTML === "+" ||
        e.target.innerHTML === "-" ||
        e.target.innerHTML === "x" ||
        e.target.innerHTML === "/" ||
        e.target.innerHTML === "-") &&
      (lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "/" ||
        lastChar === "x" ||
        lastChar === "-")
    ) {
      const newString =
        this.state.currentCalc.slice(0, -1) + e.target.innerHTML;
      console.log("NEW STRING", newString);
      this.setState({
        currentCalc: newString,
      });
    } else {
      this.setState({
        currentCalc: this.state.currentCalc.concat(e.target.innerHTML),
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="text-display">{this.state.currentCalc}</div>
        <div className="calculator-outline">
          <div className="scientific-calculator">
            <ScientificCalculator />
          </div>
          <div className="calculator-normal">
            <span onClick={this.handleClick}>
              <Button text={"C"} color={"#919191"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={"+/-"} color={"#919191"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={"%"} color={"#919191"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={"÷"} color={"orange"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={7} color={"#404040"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={8} color={"#404040"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={9} color={"#404040"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={"x"} color={"orange"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={4} color={"#404040"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={5} color={"#404040"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={6} color={"#404040"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={"-"} color={"orange"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={1} color={"#404040"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={2} color={"#404040"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={3} color={"#404040"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={"+"} color={"orange"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={0} color={"#404040"} width={"210px"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={"."} color={"#404040"} />
            </span>
            <span onClick={this.handleClick}>
              <Button text={"="} color={"orange"} />
            </span>
          </div>
          <div className="history">
            <div class="history-title">HISTORY</div>
            {this.state.history.map((calc) => (
              <div className="history-element">{calc}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
