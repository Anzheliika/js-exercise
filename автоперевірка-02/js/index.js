// // #1 Оператор return
// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   }
//   return 'You are a minor';
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// // #2 ЗАДАЧА: ПЕРЕВІРКА ПАРОЛЯ (РАННЄ ПОВЕРНЕННЯ)
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
// }

// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));

// // #3 ЗАДАЧА: СКЛАД ТОВАРІВ 3.0
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// // #4 Масив
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// // #5
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// // #6 Зміна масиву
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// fruits[1] = 'peach';
// fruits[3] = 'banana';

// console.log(fruits);

// // #7 Довжина масиву
// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// // #8 значення останнього елемента
// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

// // #9 ЗАДАЧА: КРАЙНІ ЕЛЕМЕНТИ МАСИВУ
// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// // #10 Метод split(delimiter)
// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);
//   return words;
// }
// console.log(splitMessage('Mango hurries to the train', ' '));
// console.log(splitMessage('Mango', ''));
// console.log(splitMessage('best_for_week', '_'));

// // #ЗАДАЧА: ГРАВІРУВАННЯ ПРИКРАС
// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(' ').length * pricePerWord;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 20));

// // #12 Метод масивів join(delimiter)
// function makeStringFromArray(array, delimiter) {
//   let string;
//   string = array.join(delimiter);
//   return string;
// }

// console.log(
//   makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')
// );

// // #13 ЗАДАЧА: ГЕНЕРАТОР SLUG
// function slugify(title) {
//   return title.toLowerCase().split(' ').join('-');
// }
// console.log(slugify('Arrays for begginers'));
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

// // #14 Метод slice(begin, end)
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// // #15 Метод concat
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// // #16 ЗАДАЧА: КОМПОЗИЦІЯ МАСИВІВ
// function makeArray(firstArray, secondArray, maxLength) {
//   let array = firstArray.concat(secondArray);
//   array = array.length > maxLength ? array.slice(0, maxLength) : array;

//   return array;
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));

// // #17 Цикли
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// // #18 ЗАДАЧА: СУМА ЧИСЕЛ (ЦИКЛ FOR)
// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//     }
//     console.log(sum);
//     return sum;
// }

// calculateTotal(3);
// calculateTotal(18);
// calculateTotal(24);

// // #19 Цикл for
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// // #20 ЗАДАЧА: ОБЧИСЛЕННЯ СУМИ ПОКУПКИ
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   console.log(total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);

// // #21 ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА
// function findLongestWord(string) {

//   const newArray = string.split(' ');
//   let longestWord = '';
//   for (let word of newArray) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//       console.log(longestWord);
//     }
//   }
//   return longestWord;
// }
// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');

// // #22 Метод push()
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//     }
//     console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);

// // #23 ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ
// function filterArray(numbers, value) {

//   const NewNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       NewNumbers.push(number);
//     }
//   }
//   console.log(NewNumbers);
//   return NewNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([12, 24, 8, 41, 76], 38);

// // #24 Метод includes(value)
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit);
// }
// console.log(checkFruit('plum'));
// console.log(checkFruit('mandarin'));

// // #25 ЗАДАЧА: СПІЛЬНІ ЕЛЕМЕНТИ
// function getCommonElements(array1, array2) {
//   let newArray = [];

//   for (let string of array1) {
//     if (array1.includes(string) && array2.includes(string)) {
//       newArray.push(string);
//     }
//     }
//     console.log(newArray);
//   return newArray;
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);


// // #26 Інструкція for...of
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let number of order) {
//     total += number;
//     }
//     console.log(total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// #27 ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//     }
//     console.log(filteredNumbers);
//     return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([12, 24, 8, 41, 76], 38);

// // #28 операція за модулем (%)
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// // #29 ЗАДАЧА: ПАРНІ ЧИСЛА
// function getEvenNumbers(start, end) {

//   const numbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }
//   console.log(numbers);
//   return numbers;
// }

// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

// // #30 оператор break
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

// // #31
// function findNumber(start, end, divisor) {

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));

// // #32 ЗАДАЧА: ФУНКЦІЯ INCLUDES()
// function includes(array, value) {

//   for (let number of array) {
//     if (number === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
// );
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));