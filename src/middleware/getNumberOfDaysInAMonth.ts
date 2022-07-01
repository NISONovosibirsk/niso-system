const getNumberOfDaysInAMonth = (year, month) =>
    33 - new Date(year, month, 33).getDate();

export default getNumberOfDaysInAMonth;
