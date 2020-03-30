import React from "react";
import Number from "../number";
import Buttons from "../button";

class Lotto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: "a",
      b: "b"
    };
  }

  randomNum() {
    // this.setState({
    //   a: Math.floor(Math.random() * 10)
    // });

    console.log(Math.floor(Math.random() * 50));
  }

  render() {
    return (
      <div>
        <h1>Lotto 6 / 49</h1>
        <p>Generating lucky numbers</p>
        {/* <div
          onClick={() => {
            this.randomNum();
          }}
        >
          CLICK ME!
        </div> */}
        <Number />
        <Buttons random={this.randomNum} />
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
