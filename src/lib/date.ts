const currentDate = new Date();
const currentHour = currentDate.getHours();

export const getGreetings = (): string => {
  if (currentHour >= 4 && currentHour <= 11) {
    return "morning";
  } else if (currentHour >= 12 && currentHour <= 17) {
    return "afternoon";
  } else {
    return "evening";
  }
};

export const secondsToTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);

  const period = hours >= 12 ? "PM" : "AM";

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

  const minutes = Math.floor((seconds % 3600) / 60);

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return `${formattedHours}:${formattedMinutes} ${period}`;
};

export const timeDifferenceInHours = (
  startSeconds: number,
  endSeconds: number
): string => {
  let diffSeconds = endSeconds - startSeconds;

  if (diffSeconds < 0) {
    diffSeconds += 24 * 3600;
  }

  const hours = Math.floor(diffSeconds / 3600);
  const minutes = Math.floor((diffSeconds % 3600) / 60);

  return `${hours}h ${minutes}min`;
};
