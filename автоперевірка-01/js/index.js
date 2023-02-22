// // #6 ЗАДАЧА: ЗАМОВЛЕННЯ ПРОДУКТУ
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = (pricePerDroid * orderedQuantity + deliveryFee);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// // #8 Функції
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// // #9
// function add(a, b, c) {
//   return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// // #10 ЗАДАЧА: ШАБЛОННІ РЯДКИ 2.0
// function makeMessage (name, price) {
//    const message = `You picked ${name}, price per item is ${price} credits`;
//     console.log(message);
//   return message;
// };
// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);

// // #11 ЗАДАЧА: МАТЕМАТИЧНІ ОПЕРАТОРИ 2.0
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   console.log(totalPrice);

//   return totalPrice;
// }
// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);

// // #12 ЗАДАЧА: ЗАМОВЛЕННЯ ПРОДУКТУ 2.0
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   console.log(message);
//   return message;
// }

// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);

// // #13 Оператори >, <, >=, <=
// function isAdult(age) {
//   const passed = age >= 18;
//   console.log(passed);
//   return passed;
// }

// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

// // #14 Строгі оператори === і !==
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = password === SAVED_PASSWORD;
//   console.log(isMatch);
//   return isMatch;
// }
// isValidPassword('mangodab3st');
// isValidPassword('kiwirul3z');
// isValidPassword('jqueryismyjam');

// // #15 Розгалуження (if...else)
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//     }
//     console.log(message);
//   return message;
// }
// checkAge(20);
// checkAge(8);

// // #16 ЗАДАЧА: СКЛАД ТОВАРІВ
// function checkStorage(available, ordered) {
//   let message;

//   if (ordered > available) {
//     message = `Not enough goods in stock!`;
//   } else {
//     message = `Order is processed, our manager will contact you.`;
//   }
//   console.log(message);
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// // #17 Комбіновані оператори
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a, b, c, d);

// // #18 ЗАДАЧА: ПЕРЕВІРКА БАЛАНСУ
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;

//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   console.log(message);
//   return message;
// }

// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// // #19 Блок else...if
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   console.log(message);
//   return message;
// }

// checkPassword('mangohackzor');
// checkPassword(null);
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');

// // #20 ЗАДАЧА: СКЛАД ТОВАРІВ 2.0
// function checkStorage(available, ordered) {
//   let message;

//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   console.log(message);
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// // #21 Логічні оператори (&&)
// function isNumberInRange(start, end, number) {
//   const isInRange = start <= number && number <= end;
//   console.log(isInRange);
//   return isInRange;
// }

// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

// // #22 Оператор ||
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip';
//   console.log(canAccessContent);
//   return canAccessContent;
// }

// checkIfCanAccessContent('pro');
// checkIfCanAccessContent('starter');
// checkIfCanAccessContent('vip');
// checkIfCanAccessContent('free');

// // #23 Оператор !
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;
//   console.log(isNotInRange);
//   return isNotInRange;
// }

// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

// // #24 ЗАДАЧА: ОБЧИСЛЕННЯ ЗНИЖКИ
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;

//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   }
//   console.log(discount);
//   return discount;
// }

// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);

// // #25 Тернарний оператор "?"
// function checkStorage(available, ordered) {
//   let message;
//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';
//   console.log(message);
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// // #26 ЗАДАЧА: ПЕРЕВІРКА ПАРОЛЯ
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   message =
//     password === ADMIN_PASSWORD
//       ? 'Access is allowed'
//       : 'Access denied, wrong password!';

//   console.log(message);
//   return message;
// }

// checkPassword('jqueryismyjam');
// checkPassword('angul4r1sl1f3');
// checkPassword('r3actsux');

// // #27 Інструкція switch
// function getSubscriptionPrice(type) {
//   let price;

//   switch (type) {
//     case 'starter':
//       price = 0;
//       break;

//     case 'professional':
//       price = 20;
//       break;

//     case 'organization':
//       price = 50;
//       break;
//   }
//   console.log(price);
//   return price;
// }

// getSubscriptionPrice('professional');
// getSubscriptionPrice('organization');
// getSubscriptionPrice('starter');

// // #28 Блок default
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;

//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;

//     default:
//       message = 'Access denied, wrong password!';
//   }
//   console.log(message);
//   return message;
// }

// checkPassword('mangohackzor');
// checkPassword(null);
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');

// // #29 ЗАДАЧА: ДОСТАВКА ТОВАРУ
// function getShippingCost(country) {
//   let message;

//   switch (country) {
//     case 'China':
//       message = 'Shipping to China will cost 100 credits';
//       break;

//     case 'Chile':
//       message = 'Shipping to Chile will cost 250 credits';
//       break;

//     case 'Australia':
//       message = 'Shipping to Australia will cost 170 credits';
//       break;

//     case 'Jamaica':
//       message = 'Shipping to Jamaica will cost 120 credits';
//       break;

//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }
//   console.log(message);
//   return message;
// }

// getShippingCost('Australia');
// getShippingCost('Germany');
// getShippingCost('China');
// getShippingCost('Chile');
// getShippingCost('Jamaica');
// getShippingCost('Sweden');

// // #30 Властивість length
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;
//   console.log(message);
//   return message;
// }

// getNameLength('Poly');
// getNameLength('Harambe');
// getNameLength('Billy');
// getNameLength('Joe');

// // #31 рядок[індекс]
// const courseTopic = 'JavaScript essentials';

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// // #32 Метод рядків slice(startIndex, endIndex)
// function getSubstring(string, length) {
//   const substring = string.slice(0, length);
//   console.log(substring);
//   return substring;
// }

// getSubstring('Hello world', 3);
// getSubstring('Hello world', 6);
// getSubstring('Hello world', 8);
// getSubstring('Hello world', 11);
// getSubstring('Hello world', 0);

// // #33 ЗАДАЧА: ФОРМАТУВАННЯ ПОВІДОМЛЕННЯ
// function formatMessage(message, maxLength) {
//   let result;

//   if (message.length <= maxLength) {
//     result = message;
//   } else if (message.length > maxLength) {
//     result = message.slice(0, maxLength) + '...';
//   }
//   console.log(result);
//   return result;
// }

// formatMessage('Curabitur ligula sapien', 16);
// formatMessage('Curabitur ligula sapien', 23);
// formatMessage('Vestibulum facilisis purus nec', 20);
// formatMessage('Vestibulum facilisis purus nec', 30);
// formatMessage('Nunc sed turpis a felis in nunc fringilla', 15);
// formatMessage('Nunc sed turpis a felis in nunc fringilla', 41);

// // #34 Методи рядка toLowerCase() і toUpperCase()
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();
//   console.log(normalizedInput);
//   return normalizedInput;
// }

// normalizeInput('Hello world');
// normalizeInput("This ISN'T SpaM");
// normalizeInput('Big SALE');

// // #35 Метод includes()
// function checkForName(fullName, name) {
//   const result = fullName.includes(name);
//   console.log(result);
//   return result;
// }

// checkForName('Egor Kolbasov', 'Egor');
// checkForName('Egor Kolbasov', 'Zhenya');

// // #36 ЗАДАЧА: ПЕРЕВІРКА СПАМУ
// function checkForSpam(message) {
//   let result;

//   if (
//     message.includes('spam') ||
//     message.includes('sale') ||
//     message.includes('SPAM') ||
//     message.includes('SalE')
//   ) {
//     result = true;
//   } else {
//     result = false;
//   }
//   console.log(result);
//   return result;
// }

// checkForSpam('Latest technology news');
// checkForSpam('Get best sale offers now!');
// checkForSpam('[SPAM] How to earn fast money?');
// checkForSpam('Amazing SalE, only tonight!');
