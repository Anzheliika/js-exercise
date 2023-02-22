// // #1
// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }
// const result = makePizza();
// const pointer = makePizza;
// console.log(result);
// console.log(pointer);

// // #2 Функція зворотного виклику (callback, колбек)
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName) ;
// }

// console.log(makeMessage('Royal Grand', makePizza));
// console.log(makeMessage('Ultracheese', deliverPizza));

// // #3 інлайн-функцію
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// // #4
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// // #5 Метод перебирання масиву forEach
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   orderedItems.forEach(function (item, index) {
//     totalPrice += item;
//   });
//     console.log(totalPrice);
//   return totalPrice;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// // #6 ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ
// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach(function (number, index) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//     console.log(filteredNumbers);
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([12, 24, 8, 41, 76], 38);

// // #7 ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   firstArray.forEach(function (arr, index) {
//     if (secondArray.includes(arr)) {
//       commonElements.push(arr);
//     }
//   });
//     console.log(commonElements);
//   return commonElements;
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

// // #8 Стрілочні функції
// // function calculateTotalPrice(quantity, pricePerItem) {
// //   return quantity * pricePerItem;
// // }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(500, 2));

// // #9 неявне повернення (implicit return)
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(500, 2));

// // #10
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
//     orderedItems.forEach((item) => {
//         totalPrice += item;
//     });
//   console.log(totalPrice);
//   return totalPrice;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);

// // #11 ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     console.log(filteredNumbers);
//     return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);

// // #12 ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ 2.0
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });
//     console.log(commonElements);
//     return commonElements;
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);

// // #13 Функція з побічними ефектами & Чиста функція
// function changeEven(numbers, value) {

//   const newNumbers = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       number += value;
//     }
//     newNumbers.push(number);
//   });
//   return newNumbers;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// // #14 Метод map(callback)
// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

// // #15
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books.map(book => book.title);
// console.log(titles);

// // #16 Метод flatMap(callback)
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// // #19 Метод filter(callback)
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 === 1);

// console.log(evenNumbers);
// console.log(oddNumbers);

// // #20
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];

// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);

// // #21
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// const booksByBernard = booksByAuthor.map(book => book.title);
// console.log(topRatedBooks);
// console.log(booksByAuthor);
// console.log(booksByBernard);

// // // #17-18, #22-27, #29, #31, #33
// const getUserNames = users => {
//   const userNames = users.map(user => user.name);
//   console.log(userNames);
//   return userNames;
// };

// const getUserEmails = users => {
//   const userEmails = users.map(user => user.email);
//   console.log(userEmails);
//   return userEmails;
// };
// const getUsersWithEyeColor = (users, color) => {
//   const eyeColor = users.filter(user => user.eyeColor === color);
//   console.log(eyeColor);
//   return eyeColor;
// };

// const getUsersWithAge = (users, minAge, maxAge) => {
//   const userAge = users.filter(({ age }) => age >= minAge && age < maxAge);
//   console.log(userAge);
//   return userAge;
// };

// const getUsersWithFriend = (users, friendName) => {
//   const friends = users.filter(user => user.friends.includes(friendName));
//   console.log(friends);
//   return friends;
// };

// const getFriends = users => {
//   const allFriends = users.flatMap(user => user.friends);
//   const uniqueFriends = allFriends.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
//   console.log(uniqueFriends);
//   return uniqueFriends;
// };

// const getActiveUsers = users => {
//   const activeUsers = users.filter(user => user.isActive === true);
//   console.log(activeUsers);
//   return activeUsers;
// };

// const getInactiveUsers = users => {
//   const inactiveUsers = users.filter(user => user.isActive === false);
//   console.log(inactiveUsers);
//   return inactiveUsers;
// };

// const getUserWithEmail = (users, email) => {
//   const userWithEmail = users.find(user => user.email === email);
//   console.log(userWithEmail);
//   return userWithEmail;
// };

// const isEveryUserActive = users => {
//   const activeUser = users.every(user => user.isActive === true);
//   console.log(activeUser);
//   return activeUser;
// };

// const isAnyUserActive = users => {
//   const anyUserActive = users.some(user => user.isActive === true);
//   console.log(anyUserActive);
//   return anyUserActive;
// };

// const calculateTotalBalance = users => {
//   const totalBalance = users.reduce((total, user) => {
//     return total + user.balance;
//   }, 0);
//     console.log(totalBalance);
//   return totalBalance;
// };

// const getTotalFriendCount = users => {
//   const allFriends = users.reduce((friends, user) => {
//     friends.push(...user.friends);

//     return friends;
//   }, []);
//     const countFriends = allFriends.length;
//     return countFriends;
// };

// const getTotalFriendCount = users => {
//     const allFriends = users.reduce((friends, user) => [...friends, ...user.friends], []);
//     console.log(allFriends);
//   return allFriends.length;
// };

// const sortByAscendingBalance = users => {
//     const ascedingBalance = [...users].sort((a, b) => a.balance - b.balance);
//     console.log(ascedingBalance);
//   return ascedingBalance;
// };

// const sortByDescendingFriendCount = users => {
//   const friendCount = [...users].sort((a, b) => b.friends.length - a.friends.length);
//   console.log(friendCount);
//   return friendCount;
// };

// const sortByName = users => {
//   const nameSort = [...users].sort((a, b) => a.name.localeCompare(b.name));
//   console.log(nameSort);
//   return nameSort;
// };

// const getNamesSortedByFriendCount = users => {
//   const namesSortedByFriendCount = [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name)
//   console.log(namesSortedByFriendCount);
//   return namesSortedByFriendCount;
// };

// const getSortedFriends = users => {
//   const sortedFriends = users
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));
  
//   console.log(sortedFriends);
//   return sortedFriends;
// };

// const getTotalBalanceByGender = (users, gender) => {
//   const maleBalance = users
//     .filter(user => user.gender === gender)
//   .reduce((total, user) => total + user.balance, 0);
  
//   console.log(maleBalance);
//   return maleBalance;
//  };


// const USERS = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// getUserNames(USERS);
// getUserEmails(USERS);
// getUsersWithEyeColor(USERS, "blue");
// getUsersWithAge(USERS, 20, 30);
// getUsersWithFriend( USERS,'Briana Decker');
// getFriends(USERS);
// getActiveUsers(USERS);
// getInactiveUsers(USERS);
// getUserWithEmail(USERS, 'shereeanthony@kog.com');
// isEveryUserActive(USERS);
// isAnyUserActive(USERS);
// calculateTotalBalance(USERS);
// console.log(getTotalFriendCount(USERS));
// sortByAscendingBalance(USERS);
// sortByDescendingFriendCount(USERS);
// sortByName(USERS);
// getNamesSortedByFriendCount(USERS);
// getSortedFriends(USERS);
// getTotalBalanceByGender(USERS, "male");
// getTotalBalanceByGender(USERS, "female");

// // #28 Метод find()
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// // #30 Метод every(callback)
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(element => element % 2 === 1);
// console.log(eachElementInFirstIsEven, eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every(
//   element => element % 2 === 0
// );
// const eachElementInSecondIsOdd = secondArray.every(
//   element => element % 2 === 1
// );
// console.log(eachElementInSecondIsEven, eachElementInSecondIsOdd);

// const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 === 1);
// console.log(eachElementInThirdIsEven, eachElementInThirdIsOdd);

// #34 Метод reduce(callback, initialValue)
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players);
// console.log(playtimes);

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// });
// console.log(totalPlayTime);

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

// // #35
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// // Мій варіант
// // const averagePlayTime = players.map(player => player.playtime / player.gamesPlayed);
// // console.log(averagePlayTime);

// // const totalAveragePlaytimePerGame = averagePlayTime.reduce((total, number) => {
// //     return total + number;
// // })
// // console.log(totalAveragePlaytimePerGame);

// // const totalAveragePlaytimePerGame = players.reduce((total, player) => {
// //     return total + player.playtime / player.gamesPlayed
// // }, 0);
// // console.log(totalAveragePlaytimePerGame);

// // #38 Метод sort()
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];

// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// // #39
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// // #40
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// // #41
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );
// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );
// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );
// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );
// console.table(sortedByAuthorName);
// console.table(sortedByReversedAuthorName);
// console.table(sortedByAscendingRating);
// console.table(sortedByDescentingRating);


// // #45
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));

// console.log(names);