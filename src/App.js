// import { useState, useEffect } from "react";
import Pushup from "./pages/Pushup";
import { useTimeContext } from "./Context/useTime";

function App() {
  const { time } = useTimeContext();

  const styles = {
    color: "blue",
    textAlign: "center",
  };

  const formatMiliseconds = (time) => {
    let formattedtime = time.toLocaleTimeString().split(" ");

    return `${formattedtime[0].slice(0, -3)} ${formattedtime[1]}`;
  };

  return (
    <>
      <div style={styles}>The time is: {formatMiliseconds(time)}</div>
      <Pushup />
    </>
  );
}

export default App;
