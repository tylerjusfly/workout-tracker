import { createContext, useState } from "react";

export const TimeContext = createContext({});

export const TimeContextProvider = ({ children }) => {
  const [time, setTime] = useState(new Date());

  const StartOfDay = new Date("January 1, 2021 00:00:00").toLocaleTimeString();

  const interval = setInterval(() => {
    setTime(new Date());

    // const timeDifference = time - StartOfDay;
    // if (timeDifference >= 86400000) {
    //   // clear local storage
    //   clearInterval(interval);
    // }
  }, 60000);

  return <TimeContext.Provider value={{ time, StartOfDay, interval }}>{children}</TimeContext.Provider>;
};
