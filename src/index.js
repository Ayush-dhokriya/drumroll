import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    keys: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
  };
  render() {
    return (
      <div id="drum-machine">
        <div id="display"></div>
      </div>
    );
  }
}

const Box = (props) => <div className="box">{props.text}</div>;

ReactDOM.render(<App />, document.getElementById("root"));
