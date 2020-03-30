import React from "react";
import faker from "faker";

class Lotto extends React.Component {
  constructor(props) {
    super(props);

    this.msg = faker.random.number();
  }

  render() {
    return (
      <div>
        <p>Hello, {this.msg}</p>
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
