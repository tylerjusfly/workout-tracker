export const formatMiliseconds = (time) => {
  let formattedtime = time.toLocaleTimeString().split(" ");

  // timeString = timeString.substr(0, timeString.length - 3);

  return `${formattedtime[0].slice(0, -3)} ${formattedtime[1]}`;
};
