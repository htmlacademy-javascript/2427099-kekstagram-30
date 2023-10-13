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
