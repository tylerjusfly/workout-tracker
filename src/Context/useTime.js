import { TimeContext } from "./TimeContext";
import { useContext } from "react";

export const useTimeContext = () => {
  const context = useContext(TimeContext);

  if (!context) {
    throw Error("useTimeContext must be used inside a TimeContextProvider");
  }

  return context;
};
