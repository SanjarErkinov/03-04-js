// 1) Создайте функцию которая высчитывает площадь прямоугольника. S = a * b;
// 2) Создайте функцию которая спрашивает ваше имя и возраст. если ваше имя не равно пустой строке или null то выведите его в предложении "Меня зовут (ваше имя). Мне (ваш возраст) лет. 
// 3) Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
// 4) Создайте функцию getTidyClothes которая принимает 2 аргумента (цвет белья и порошок котором вы стираете- название). если цвет = "black" то выведите "Я стираю черное белье порошком (название порошка), если "white" - то должно выйти "Я стираю белое белье с порошком (название порошка). Если любой другой цвет то "я стираю цветное белье".
// 5) Напишите 2 функции. Первая перебирает массив из чисел [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5,6,7,8,9,10] и возвращает только целые числа ( как найти целое число в JavaScript можете найти в интернете). вторая принимает то что вернула первая функция и умножает каждое число на 2. ответ выводит в консоль);


// #1 
// function sum (a ,b) {
//     console.log(a * b);
// }
// sum(30,30)



// #2
// const myName = prompt('Введите ваше имя');
// const myAge = +prompt('Введите ваш vozrast');
// function sayHello(name, age) {
//     alert("Hello " + myName); 
//     alert("Vam " + myAge);
// }
// sayHello()



// #3
// const sumNumbers = (a, b) => {
//     if(a % 2 && b % 2) {
//         return a + b;
//     } else if(a % 2 || b % 2) {
//         if(a % 2) {
//             return a;
//         };
//         return b;
//     } else {
//         return a - b;
//     };
// };

// console.log(sumNumbers(2, 3));

//#4
// const getTidyClothes = (color, powder) => {
//     if (color == "black") {
//         return 'Я стираю черное белье порошком ' + powder;
//     } else if (color == "white") {
//         return 'Я стираю белое белье с порошком ' + powder;
//     } else {
//         return 'я стираю цветное белье'; 
//     }
// }

// console.log(getTidyClothes('yellow', 'tide'));

//#5
// const arrayNumber = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8, 9, 10];

// const arrayNumber2 = [];

// arrayNumber[0];

// const iterator = (arrayNumber) => {
//     for(let i = 0; i < arrayNumber.length; i++) {
//         if(arrayNumber[i] % 2 === 0){
//             arrayNumber2.push(arrayNumber[i]);
//         };
//     };
// };

// iterator(arrayNumber);

// console.log(arrayNumber2);

// function lol (array){
//     const ok = array.map((item)=> {
//         return item*2;
//     });
//     return ok;
// };

// console.log(lol(arrayNumber2));