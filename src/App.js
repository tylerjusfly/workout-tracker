import { useState, useEffect, createRef } from "react";
import OnlyGod from "./Only-God-Can-Judge-Me.mp3";

function App() {
  const [pushupCount, setPushupCount] = useState(JSON.parse(localStorage.getItem("pushup")) || 0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = createRef();

  useEffect(() => {
    console.log("calledon relaod");
    localStorage.setItem("pushup", JSON.stringify(pushupCount));
  }, [pushupCount]);

  const bumpupCount = () => {
    setPushupCount((prevVal) => prevVal + 10);
    audioRef.current.play();
    setIsPlaying(true);
  };

  setTimeout(() => {
    if (isPlaying) {
      audioRef.current.pause();
    }
  }, 3000);

  const resetPushupCount = () => {
    setPushupCount(0);
  };

  return (
    <div className="app">
      <h3>{pushupCount} Push Up Done</h3>
      <div className="pushup-btns">
        <button className="button accept-btn" onClick={bumpupCount}>
          Bump Up
        </button>
        <button className="button cancel-btn pad" onClick={resetPushupCount}>
          Reset For The Day
        </button>
      </div>
      <audio ref={audioRef} src={OnlyGod} />
    </div>
  );
}

export default App;
