//1 test
// const clientName = 'Игорь';
// let clientSpentForAllTime = 110;
// let clientSpentToday = 25;

// let discount = 0;
// if( clientSpentForAllTime > 100 && clientSpentForAllTime <= 300) {
//     discount = '10%';

// }else if(clientSpentForAllTime > 300  && clientSpentForAllTime <= 500) {
//     discount = '20%';

// }else{
//     discount = '30%';
// }

// alert(`Вам предоставляется скидка в ${discount}`);
// clientSpentForAllTime += clientSpentToday;
// alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$`)


// 2 test

// const clientName = prompt('Введите имя клиента')
// let clientSpentToday = +prompt('Сколько клиент потратил сегодня');
// let clientSpentForAllTime = +prompt('Сколько клиент потратил за все время?');
// let discount = 0;

// if(!clientSpentToday || !clientSpentForAllTime) {
//     alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом!Перезагрузите страницу, чтобы повторить попытку');
// } else {
//    if( clientSpentForAllTime > 100 && clientSpentForAllTime <= 300) {
//     discount = '10%';

// }else if(clientSpentForAllTime > 300  && clientSpentForAllTime <= 500) {
//     discount = '20%';

// }else{
//     discount = '30%';
// }

// alert(`Вам предоставляется скидка в ${discount}`);
// clientSpentForAllTime += clientSpentToday;
// alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$`)
// }
//3 test

// 3)Когда мы проходим регистрацию, то в большинстве случаев у нас запрашивают пароль. И всегда для него есть некоторые ограничения по длине либо по символам. Сейчас вы напишете программу, которая будет проверять на валидность пароль, введенный пользователем.
// Для начала вам необходимо запросить пароль у пользователя при помощи prompt. Отобразите сообщение “Введите пароль”.
// Пароль должен удовлетворять следующим условиям:
// 1. Длина пароля должна быть минимум 3 символа и не больше 20 символов (включая 20).
// 2. Пароль должен содержать минимум 1 прописную (большую) букву.
// 3. Пароль должен содержать минимум 1 цифру.
// Если все условия удовлетворены, то выведите при помощи alert сообщение “Пароль валидный. Добро пожаловать в аккаунт!”, иначе - “Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.”
// Посмотрите на несколько возможных результатов:
// 1. “1234f” - не удовлетворяет условиям
// 2. “123456” - не удовлетворяет условиям
// 3. “1234F” - удовлетворяет условиям
// 4. “12” - не удовлетворяет условиям
// 5. “JavaScript”- не удовлетворяет условиям
// 6. “JavaScript123” - удовлетворяет условиям


// const password = prompt('Введите пароль');
// const leng = password.length >= 3 && password.length <= 20;
// const toUp = password !== password.toLowerCase();
// let falsy = false;
// for(let i = 0; i< password.length; i++ ){
//    let char = password.charCodeAt(i);
//    if(char > 48 && char <57){
//       falsy = true;
//    }
// }
// if(leng && toUp && falsy){
//     alert('Пароль валидный. Добро пожаловать в аккаунт!');
// } else {
//     alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.');
// }


// //4 test
// const sumNum = (num) => {
//     let sum = (num + '').split('').reduce(function(a, b) { return a + parseInt(b); },0)
//     let mult =(num + '').split('').reduce(function(a, b) { return a * parseInt(b); })
//     if(num % 2 === 0) {
//          return sum
//     }else{
//         return mult;
//     }
// }

// console.log(sumNum(121));


// 5)Напишите код, который предлагает пользователю ввести целое число. Нужно вывести на экран сколько в этом числе цифр, а также положительное оно или отрицательное. Например, "Число " + num + " однозначное положительное". Достаточно будет определить, является ли число однозначным, двухзначным или трехзначным и более.

// const number = +prompt('Введите цело число');
//    if( number === 0 ){
//       console.log(`"Число " + ${number} + "однозначное положительное"`)
//    }else if(number > 0 && number < 10) {
//       console.log(`"Число " + ${number} + "однозначное положительное"`)


//    }else if(number >= 10 && number < 100) {

//    }else if(number >=100){

//    }

// 6)Пользователь вводит целое число. Напишите код, который выведет число, обратное по порядку составляющих его цифр введенному. Например, введено 9876, надо вывести 6789. Решите задачу через цикл while.

// const num = 5432;
// while(num > 0) {
//    let reverse = (num + '').split('').reverse().join('');
//    console.log(reverse);
//    break;
// }


// const num = 9876;
// const num2 = num.toFixed([digits]);

// while(num > 0) {
//    digits = num % 10;
//    num = num/10 ^ 0;
//    num2 = num2 * 10;
//    num2 += digits;
   

// }

// console.log(num2);

// 7)Напишите цикл, который предлагает prompt ввести число. Если посетитель ввёл число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать ввести число пока либо посетитель не введёт 0, либо не нажмёт кнопку Cancel (ESC). После ввода нуля, показать на экран количество чисел, которые были введены, их общую сумму и среднее арифметическое.

// let count = 0;
// let sum = 0;
// let num;
// do{
//     num = +prompt('введи число');
//    if(num) {
//       count++
//       sum += num;
//    }
// }while(num);

// console.log(count);
// console.log(sum);
// console.log(sum/count);


// Нарисовать равнобедренный треугольник из символов *. Высоту выбирает пользователь. Например, при высоте = 6, на экране треугольник должен выглядеть так:
// let triangle = '';
// limit = 6;
// while (limit > 0) {
//     console.log( triangle += '*' )
//     limit -= 1;
// }

// 9)Пользователь вводит с клавиатуры натуральное число. Найдите его наибольшую цифру и выведите её через alert.
// Например, введено число 987560. Наибольшая цифра в нем 9.
// let n = +prompt("Введите целое положительное число:");
//         alert(maxDigit(n));
 
//         function maxDigit(num) {
//             let result = -1;
//             for (let i = num; i > 0; i = Math.floor(i / 10)) {
//                 let digit = i % 10;
//                 if (result < digit)
//                     result = digit;
//             }
//             return result;
//         }