import {THIS_YEAR, THIS_MONTH, CALENDAR_WEEKS} from './constants';

//same month and year
export const isSameMonth = (date, basedate) => {
  const basedateMonth = basedate[1];
  const basedateYear = basedate[0];

  const dateMonth = +date.getMonth() + 1;
  const dateYear = date.getFullYear();

  return +basedateMonth === +dateMonth && +basedateYear === +dateYear;
};

export const isSameDay = (date, basedate) => {
  const basedateDate = basedate[2];
  const basedateMonth = basedate[1];
  const basedateYear = basedate[0];

  const dateDate = date.getDate();
  const dateMonth = +date.getMonth() + 1;
  const dateYear = date.getFullYear();

  return (
    +basedateDate === +dateDate &&
    +basedateMonth === +dateMonth &&
    +basedateYear === +dateYear
  );
};

export const validateDate = value => {
  if (!(value.charAt(2) == '/' && value.charAt(5) == '/')) return false;
  const day = parseInt(value.substr(0, 2));
  const month = parseInt(value.substr(3, 2));
  const year = parseInt(value.substr(6));
  if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && !isNaN(year))
    return {day, month, year};
  return false;
};

//date that I searched is present in the given month
export const isDateOfSelectedMonth = (month, day, baseDate) => {
  if (month == baseDate[1] && day == baseDate[2]) return true;
  return false;
};

export const checkSameMonth = (date, selectedMonth) => {
  return date[1] == selectedMonth;
};

// For example: zeroPad(5, 2) => "05"
export const zeroPad = (value, length) => {
  return `${value}`.padStart(length, '0');
};

//month is of 28, 29, 30 or 31 days long
export const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR) => {
  const months30 = [4, 6, 9, 11];
  const leapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

  return month === 2
    ? leapYear
      ? 29
      : 28
    : months30.includes(month)
    ? 30
    : 31;
};

// 1 => Sunday, 7 => Saturday
export const getMonthFirstDay = (month = THIS_MONTH, year = THIS_YEAR) => {
  return +new Date(`${year}-${zeroPad(month, 2)}-01`).getDay() + 1;
};

export const getPreviousMonth = (month, year) => {
  const prevMonth = month > 1 ? month - 1 : 12;
  const prevMonthYear = month > 1 ? year : year - 1;

  return {month: prevMonth, year: prevMonthYear};
};

export const getNextMonth = (month, year) => {
  const nextMonth = month < 12 ? month + 1 : 1;
  const nextMonthYear = month < 12 ? year : year + 1;

  return {month: nextMonth, year: nextMonthYear};
};

// returns array of dates [YYYY, MM, DD]
export default (month = THIS_MONTH, year = THIS_YEAR) => {
  const monthDays = getMonthDays(month, year);
  const monthFirstDay = getMonthFirstDay(month, year);
  // console.log('months first day ', monthFirstDay);  => 4 for sept

  const daysFromPrevMonth = monthFirstDay - 1;

  // no. of days of next month that'll be shown on screen
  const daysFromNextMonth =
    CALENDAR_WEEKS * 7 - (daysFromPrevMonth + monthDays);

  // Get the previous and next months and years

  const {month: prevMonth, year: prevMonthYear} = getPreviousMonth(month, year);
  const {month: nextMonth, year: nextMonthYear} = getNextMonth(month, year);

  // Get number of days in previous month
  const prevMonthDays = getMonthDays(prevMonth, prevMonthYear);

  //for sept 2021, => 29, 30, 31
  const prevMonthDates = [...new Array(daysFromPrevMonth)].map((n, index) => {
    const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
    return [prevMonthYear, zeroPad(prevMonth, 2), zeroPad(day, 2)];
  });
  // 1 to 30
  const thisMonthDates = [...new Array(monthDays)].map((n, index) => {
    const day = index + 1;
    return [year, zeroPad(month, 2), zeroPad(day, 2)];
  });
  // 1 to 9
  const nextMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => {
    const day = index + 1;
    return [nextMonthYear, zeroPad(nextMonth, 2), zeroPad(day, 2)];
  });

  //42 dates .. prev + curr + next
  return [...prevMonthDates, ...thisMonthDates, ...nextMonthDates];
};
