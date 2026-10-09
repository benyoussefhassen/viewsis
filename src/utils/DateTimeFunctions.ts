export const getDifferenceInDays = (
  date1: string | undefined,
  date2: string,
) => {
  if (date1) {
    const diffInMs = Math.abs(
      new Date(date2).getTime() - new Date(date1).getTime(),
    );
    return diffInMs / (1000 * 60 * 60 * 24);
  } else {
    return 0;
  }
};
