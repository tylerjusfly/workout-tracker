export const formatMiliseconds = (time) => {
  let formattedtime = time.toLocaleTimeString().split(" ");

  return `${formattedtime[0].slice(0, -3)} ${formattedtime[1]}`;
};
