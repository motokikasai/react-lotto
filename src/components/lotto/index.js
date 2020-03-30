import React from "react";
// import Number from "../number";
// import Buttons from "../button";

class Lotto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: []
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.reset = this.reset.bind(this);
  }

  randomFnAdder() {}

  clickHandler() {
    this.setState({
      numbers: [
        this.randomNum(),
        this.randomNum(),
        this.randomNum(),
        this.randomNum(),
        this.randomNum(),
        this.randomNum()
      ]
    });
  }

  randomNum() {
    return Math.floor(Math.random() * 50) === 0
      ? 1
      : Math.floor(Math.random() * 48) + 1;
  }

  reset() {
    this.setState({
      numbers: []
    });
  }

  render() {
    return (
      <div>
        <section className="numbers">
          <div className="flex-row">
            {this.state.numbers.map((num, index, array) => {
              console.log(num);
              if (array.indexOf(num) === array.lastIndexOf(num)) {
                return <span className="number">{num}</span>;
              } else {
                return <span className="number">&#128169;</span>;
              }
            })}
          </div>
        </section>
        <section className="buttons">
          <button type="reset" className="reset" onClick={this.reset}>
            Reset
          </button>
          <button type="button" className="show" onClick={this.clickHandler}>
            Show me lucky numbers
          </button>
        </section>
      </div>
    );
  }
}

// function Lotto() {
//   return (
//     <section className="container">
//       <h1>Lotto 6 / 49</h1>
//       <p>Generating lucky numbers</p>
//     </section>
//   );
// }

export default Lotto;
