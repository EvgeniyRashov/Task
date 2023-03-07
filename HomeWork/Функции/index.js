// //1 test
// 1)Как мы уже с вами разобрались, существует 3 вида функций: function expression, function declaration и стрелочная функция.
// Первым делом потренируемся их создавать. Вам необходимо создать 3 функции трех разных видов. Они должны принимать в себя параметр name и возвращать строку, подставляя туда этот параметр. Название у них должны быть следующими: getName1, getName2, getName3.
// Функции необходимо удовлетворять следующим условиям:
// В каждую из этих функций должен быть передан 1 параметр name.
// Из каждой функции с помощью return должно быть возвращено значение “Имя равно name”, где name - значение переданного в функцию параметра name.
// После вам необходимо вызвать каждую функцию и вывести возвращаемое из нее значение в консоль.


// function getName1(name){
//     return `Имя равно ${name}`
// }

// console.log(getName1('Herf'));

// let getName2 = function(name){
//     return `Имя равно ${name}`
// }

// console.log(getName2('Herf'));

// const getName3 = (name) => `Имя рано ${name}`;
// console.log(getName3('Herf'));


//test2

// 2)Необходимо создать функцию getSumOfNumbers. Она будет считать сумму от 0 до переданного числа. Выберите любой из 3 типов при создании функции.
// getSumOfNumbers принимает в себя 2 параметра: number и type.
// Параметр number - это число, до которого будет считаться сумма. То есть, если было передано число 10, то функция должна посчитать сумму от 0 до 10 (0 + 1 + 2 + … + 10).
// Параметр type отвечает за выбор чисел для подсчета суммы. Он может быть 3-мя значениями: “odd”, “even” и “”. Если type равняется “odd”, то в сумму должны входить только нечетные числа, “even” - четные числа, пустая строка “” - все числа. По умолчанию параметр type должен быть равен odd.
// Функция getSumOfNumbers должна возвращать итоговую сумму с помощью return.
// Возможные результаты функции getSumOfNumbers:
// number = 10, type = ‘odd’. Возвращает 25.
// number = 10, type = ‘even’. Возвращает 30.
// number = 10, type = ‘’. Возвращает 55.

// const getSumOfNumbers = (number, type = 'odd')=> {
//     let sum =0;

//     for (let i = 0; i <= number; i++) {
//     if (type === '') {
//     sum += i
//     } else if (type === "even" && i % 2 === 0) {
//         sum += i
//     } else if (type === "odd" && i % 2 !== 0) {
//         sum += i
//     }
//     }
//     return sum
//     }
     
//     console.log(getSumOfNumbers(10, 'even'))


//test 3

// const getDivisorsCount = (number = 1)=> {
//     if (number < 0 || !Number.isInteger(number)){
//         console.log(`${number} должен быть целым числом и больше нуля!`);
//     }
//     let half = Math.floor(number / 2);
//     let count = 1; 
//         for (let i = 1; i <= half; i++) {
//     if (!(number % i))
//         ++count;
// }
// return count;      
// }


// console.log(getDivisorsCount(30))

// 4)Если переменная a больше нуля - то в ggg запишем функцию, которая выводит один !, иначе запишем функцию, которая выводит два !.

// let a = 1;
// let ggg;
// if (a > 0) {
// 	ggg = function() {
// 		return "!";
// 	}
// } else {
// 	ggg = function() {
// 		return "!!";
// 	}
// }

// console.log(ggg());



// 5)Функция ggg принимает 2 параметра: число и анонимную функцию, которая возводит число в квадрат. Возведите число в 4-тую степень с помощью ggg.
// function ggg(num, func) {
// 	return func(num);
// }

// let fun = function(num) {
// 	return num*num;
// }


// console.log(ggg(ggg(5, fun), fun));

// 6)Функция ggg принимает 2 параметра: анонимную функцию, которая возвращает 3 и анонимную функцию, которая возвращает 4. Верните результатом функции ggg сумму 3 и 4.
// function ggg(func1, func2) {
// 	return (func1() + func2());
// }

// console.log(ggg(function(){return 3;}, function(){return 4;}));

// 7)Дана функция ggg. Она требует первым параметром число, вторым функцию, которая возводит в квадрат, а третьим параметром функцию, которая возводит в куб. Эти функции есть как Function Declaration - kvadrat, kub. Пусть функция ggg вернет сумму квадрата и куба числа.
// function ggg(num, func1, func2) {
// 	return (func1(num) + func2(num));
// }

// function kvadrat(n) {
// 	return n * n;
// }
// function kub(n) {
// 	return n * n * n;
// }

// console.log(ggg(5,kvadrat, kub));

// 8)Сделайте функцию each, которая первым параметром принимает массив, а вторым - функцию, которая применится к каждому элементу массива. Функция each должна вернуть измененный массив.
// let arr = [2,3,4,5];

// function each(arr, func) {
// 	for (var i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i]);
// 	}
// 	return arr;
// }

// function kvadrat(n) {
// 	return n * n;
// }
// function kub(n) {
// 	return Math.pow(n,3);
// }

// console.log(each(arr,kub));

// 10)Сделайте функцию each, которая первым параметром принимает массив, а вторым - массив функций, которые по очереди применятся к каждому элементу массива: к первому элементу массива - первая функция, ко второму - вторая и так далее пока функции в массиве не закончатся, после этого возьмется первая функция, вторая и так далее по кругу. 

// let arr = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5];
// function kvadrat(n) {
// 	return n * n;
// }
// function kub(n) {
// 	return Math.pow(n,3);
// }
// function fact(n) {
// 	if (n == 0) {
// 		return 1;
// 	} else {
// 		return n* fact(n-1);
// 	}
// }
// let arrF = [kvadrat, kub, fact];
// function each(arr, arrFunc) {
// 	let j = 0; 
// 	for (let i = 0; i < arr.length; i++) {
// 		if (i >= arrFunc.length) {
// 			j = i % arrFunc.length;
			   
// 		}
// 		arr[i] = arrFunc[j](arr[i]);
// 		j++;
// 	}
// 	return arr;
// }

//  console.log(each(arr, arrF));