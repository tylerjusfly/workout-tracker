import { useState, useEffect, createRef } from "react";
import WolfHowls from "../assets/sounds/Wild-wolf-howling.mp3";
import "../assets/css/pushup.css";
import { useTimeContext } from "../Context/useTime";

const Pushup = () => {
  const [pushupCount, setPushupCount] = useState(JSON.parse(localStorage.getItem("pushup")) || 0);

  const { time, interval } = useTimeContext();

  const audioRef = createRef();

  useEffect(() => {
    // document.title = "Pushups"
    // const value = [
    //   { date: "01/15/2023", count: 2 },
    //   { date: "02/15/2023", count: 10 },
    //   { date: "04/15/2023", count: 4 },
    //   { date: "07/30/2023", count: 15 },
    //   { date: "08/13/2023", count: 15 },
    //   { date: "08/11/2023", count: 10 },
    //   { date: "11/2/2023", count: 22 },
    //   { date: "11/3/2023", count: 27 },
    // ];
    let a = [];

    a = JSON.parse(localStorage.getItem("activites")) || [];

    a.push({ date: new Date(), count: pushupCount });
    localStorage.setItem("activites", JSON.stringify(a));

    localStorage.setItem("pushup", JSON.stringify(pushupCount));
  }, [pushupCount]);

  useEffect(() => {
    // will be resetting state if day is over
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
