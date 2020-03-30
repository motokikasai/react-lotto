import React from "react";
import "./styles/App.css";

import Lotto from "./components/lotto";

function App() {
  return (
    <div className="App">
      <h1>Lotto 6 / 49</h1>
      <p>Generating lucky numbers</p>
      <Lotto />
    </div>
  );
}

export default App;
