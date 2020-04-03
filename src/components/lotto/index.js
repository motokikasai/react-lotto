import React from "react";
// import Number from "../number";
// import Buttons from "../button";

class Lotto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [],
      number: null
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.reset = this.reset.bind(this);
  }

  getUniqueNumbers(number) {
    let array = [];
    while (number) {
      let random = this.randomNum();
      if (array.indexOf(random) === -1) {
        // Number is unique
        array.push(random);
      } else {
        // Number already exists
        number++;
      }
      number--;
    }
    return array;
  }

  clickHandler() {
    this.setState({
      numbers: this.getUniqueNumbers(6),
      number: this.randomNumTen()
    });

    document.querySelector(".specialNum").style.display = "flex";
  }

  randomNum() {
    return Math.floor(Math.random() * 50) === 0
      ? 1
      : Math.floor(Math.random() * 49) + 1;
  }

  randomNumTen() {
    return Math.floor(Math.random() * 10) === 0
      ? 1
      : Math.floor(Math.random() * 10) + 1;
  }

  reset() {
    this.setState({
      numbers: [],
      number: []
    });

    document.querySelector(".specialNum").style.display = "none";
  }

  render() {
    return (
      <div>
        <section className="numbers">
          <div className="flex-row">
            <div className="flex-row">
              {this.state.numbers.map((num, index, array) => {
                console.log(num);
                if (array.indexOf(num) === array.lastIndexOf(num)) {
                  return <span className="number">{num}</span>;
                } else {
                  return (
                    <span className="number" role="img" aria-label="Poop">
                      &#128169;
                    </span>
                  );
                }
              })}
            </div>
            <div className="inline">
              <span className="specialNum">{this.state.number}</span>
            </div>
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
