function checkStringLength(string, count) {
  return string.length <= count;
}

// Cтрока короче 20 символов
checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10); // false

function checkIsPalindrome(string) {
  const updatedString = string.toLowerCase().replaceAll(' ', '');
  let reversedString = '';

  for (let i = updatedString.length - 1; i >= 0; i--) {
    reversedString += updatedString[i];
  }

  return updatedString === reversedString;
}

// Строка является палиндромом
checkIsPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
checkIsPalindrome('ДовОд'); // true
// Это не палиндром
checkIsPalindrome('Кекс'); // false
// Это палиндром
checkIsPalindrome('Лёша на полке клопа нашёл '); // true

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

  //Можно сделать одной строкой использую регулярное выражение которое заменит нечисловые значения на пустую строку.
  //Затем эта строка преобразуется в число.
  // return parseInt(string.replace(/\D/g, ''), 10);
}

getIntegerFromString('2023 год'); // 2023
getIntegerFromString('ECMAScript 2022'); // 2022
getIntegerFromString('1 кефир, 0.5 батона'); // 105
getIntegerFromString('агент 007'); // 7
getIntegerFromString('а я томат'); // NaN
getIntegerFromString(2023); // 2023
getIntegerFromString(-1); // 1
getIntegerFromString(1.5); // 15
