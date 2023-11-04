function checkStringLength(string, count) {
  return string.length <= count;
}

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

function checkIsPalindrome(string) {
  const updatedString = string.toLowerCase().replaceAll(' ', '');
  let reversedString = '';

  for (let i = updatedString.length - 1; i >= 0; i--) {
    reversedString += updatedString[i];
  }

  return updatedString === reversedString;
}

checkIsPalindrome('топот');
checkIsPalindrome('ДовОд');
checkIsPalindrome('Кекс');
checkIsPalindrome('Лёша на полке клопа нашёл ');

function getIntegerFromString(string) {
  if (typeof string === 'number') {
    string = string.toString();
  }

  let numberString = '';

  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      numberString += string[i];
    }
  }

  return parseInt(numberString, 10);
}

getIntegerFromString('2023 год');
getIntegerFromString('ECMAScript 2022');
getIntegerFromString('1 кефир, 0.5 батона');
getIntegerFromString('агент 007');
getIntegerFromString('а я томат');
getIntegerFromString(2023);
getIntegerFromString(-1);
getIntegerFromString(1.5);

const MINUTES_IN_HOUR = 60;

function isWorkingHours (startTime, endTime, eventTime, duration) {
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);
  const [eventHour, eventMinute] = eventTime.split(':').map(Number);

  const totalStartMinutes = startHour * MINUTES_IN_HOUR + startMinute;
  const totalEndMinutes = endHour * MINUTES_IN_HOUR + endMinute;
  const totalEventMinutes = eventHour * MINUTES_IN_HOUR + eventMinute;

  const eventEndMinutes = totalEventMinutes + duration;

  return (totalStartMinutes <= eventEndMinutes && totalEndMinutes >= eventEndMinutes);
}

isWorkingHours('08:00', '17:30', '14:00', 90);
isWorkingHours('8:0', '10:0', '8:0', 120);
isWorkingHours('08:00', '14:30', '14:00', 90);
isWorkingHours('14:00', '17:30', '08:0', 90);
isWorkingHours('8:00', '17:30', '08:00', 900);
