import { useState, useEffect, createRef } from "react";
import WolfHowls from "../assets/sounds/Wild-wolf-howling.mp3";
import "../assets/css/pushup.css";
import { useTimeContext } from "../Context/useTime";

const Pushup = () => {
  const [pushupCount, setPushupCount] = useState(JSON.parse(localStorage.getItem("pushup")) || 0);

  const { time, interval, StartOfDay } = useTimeContext();

  const audioRef = createRef();

  useEffect(() => {
    // document.title = "Pushups"

    localStorage.setItem("pushup", JSON.stringify(pushupCount));
  }, [pushupCount]);

  useEffect(() => {
    console.log("time sets");

    const timeDifference = time - StartOfDay;
    if (timeDifference >= 86400000) {
      // set pushup to 0
      setPushupCount(0);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time]);

  const bumpupCount = () => {
    setPushupCount((prevVal) => prevVal + 10);
    audioRef.current.play();
  };

  const resetPushupCount = () => {
    setPushupCount(0);
  };

  return (
    <div className="pushup">
      <h3 style={{ color: "aliceblue" }}>{pushupCount} Push Up Done</h3>
      <div className="pushup-btns">
        <button className="button accept-btn" onClick={bumpupCount}>
          Bump Up
        </button>
        <button className="button cancel-btn pad" onClick={resetPushupCount}>
          Reset For The Day
        </button>
      </div>
      <audio ref={audioRef} src={WolfHowls} />
    </div>
  );
};

export default Pushup;
