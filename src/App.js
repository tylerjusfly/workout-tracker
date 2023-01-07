// import { useState, useEffect } from "react";
import Pushup from "./pages/Pushup";
import { useTimeContext } from "./Context/useTime";

function App() {
  const { time } = useTimeContext();

  const styles = {
    color: "blue",
    textAlign: "center",
  };

  return (
    <>
      <div style={styles}>The time is: {time.toLocaleTimeString()}</div>
      <Pushup />
    </>
  );
}

export default App;
