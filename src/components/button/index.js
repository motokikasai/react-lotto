import React from "react";

function Buttons(props) {
  return (
    <section className="buttons">
      <button type="reset" className="reset">
        Reset
      </button>
      <button type="button" className="show" onClick={props.random()}>
        Show me lucky numbers
      </button>
    </section>
  );
}

export default Buttons;
