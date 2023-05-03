import React from "react";
import ReactDOM from "react-dom";

const sounds = [
  {
    key: "Q",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "W",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "E",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "A",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "S",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "D",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "Z",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "X",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
  {
    key: "C",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
];

const App = (props) => (
  <div id="drum-machine" className="container">
    <div id="display" className="display">
      {sounds.map((sound, idx) => (
        <Box text={sound.key} key={idx} audio={sound.mp3} />
      ))}
    </div>
  </div>
);

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

  playSound = () => {
    this.audio.current.play();
  };
  render() {
    const { text, audio } = this.props;
    return (
      <div className="box" onClick={this.playSound}>
        {text}
        <audio ref={this.audio} src={audio} className="clip" id={text} />
      </div>
    );
  }
}

ReactDOM.render(<App keys={keys} />, document.getElementById("root"));
