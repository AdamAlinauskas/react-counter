import React from "react";
import "./App.css";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Counter initialValue={1} />
      {/* <Counter initialValue={2} />
      <Counter initialValue={3} />
      <Counter initialValue={4} /> */}
    </div>
  );
}

export default App;
