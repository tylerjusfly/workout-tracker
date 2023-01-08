import React from "react";
import hourlyClock from "../assets/clock-svg.svg";
import { formatMiliseconds } from "../assets/utils";
import { useTimeContext } from "../Context/useTime";

const Nav = () => {
  const { time } = useTimeContext();

  const styles = {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: "15px",
    color: "aliceblue",
    textAlign: "center",
    fontWeight: 700,
    backgroundColor: "black",
  };

  return (
    <div style={styles}>
      <img src={hourlyClock} alt="24hr clock" width={70} />
      <span>Today: {formatMiliseconds(time)}</span>
    </div>
  );
};

export default Nav;
