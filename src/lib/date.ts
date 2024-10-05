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
