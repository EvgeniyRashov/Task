// 1. Клонирование массива
// Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал.
// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// function arrayClone(arr) {
//      let copyArr = [...arr];
//      return copyArr;
// }
// let arr1 = arrayClone(vegetables);
// console.log(arr1); // ['Капуста', 'Репа', 'Редиска', 'Морковка']


// 2. Преобразование массива в строку
// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами.
// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// function arrString(arr) {
//     let str = arr.join();
//     return str;
// }

// console.log(arrString(vegetables)); // "Капуста, Репа, Редиска, Морковка"

// 3. Двоеточие между нечётными числами
// Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.


// function colonOdd (num) {
//     let str = String(num);
//     let res = '';
//     for(let i = 0; i < str.length; i++) {
//     if(str[i] % 2 === 1 && str[i+1] % 2 === 1) {
//     res += str[i] + ':' + str[i+1];
//     i++;
//     } else {
//     res += str[i];
//     }
//     }
//     return res;
//     }
// console.log(colonOdd(55639217));

// 4. Замена регистра символов
// Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает строку в качестве аргумента и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк].
// let str = 'кАжДыЙ оХоТнИк'
// function changeRegister (str) { 
//     let result = ''
//     for(let i = 0; i < str.length; i++) {
//     if(str[i] === str[i].toUpperCase()) {
//     result += str[i].toLowerCase();
//     } else {
//     result += str[i].toUpperCase();
//     }
//     }
//     return result.split( );
//     }




// console.log(changeRegister(str)); 


// 5. Удалить повторяющиеся элементы массива
// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).
// let arr = ["php", "php", "css", "css",
//   "script", "script", "html", "html", "java"
// ];
// function removeDuplicates(arr) {
//     let result = [];
//     for(let item of arr) {
//         if(!result.includes(item)) {
//             result.push(item);
//         }
//     }

//         return result;
// }
// console.log(removeDuplicates(arr));

// 6. Найдите високосные годы
// Високосным годом является каждый четвертый год и века начинаются только на высокостные года, отличие високосного года от обычного заключается в появлении 366-го дня. Напишите функцию chooseYears(start, end), которая принимает в качестве аргументов диапозон лет и возвращает массив високосных лет в заданном диапазоне.
// function chooseYears(start, end) {
//     let arr = [];
//     for (let i = start; i <= end; i++) {
//     if (i % 4 === 0) {

//         arr.push(i);
//     } 
//     }
//     return arr;
//     }
// console.log(chooseYears(2000,2022));

// 7. Отобразить элементы в случайном порядоке
// Используя метод sort перепишите предсталенный ниже код, который с помощью цикла for случайно изменяет порядок расстановки элементов массива.
// function shuffle(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     return arr;
// }

// let array = [0,1,2,3,4,5,6,7,8,9];
// console.log(shuffle(array));

// function shuffle(){
//         return array.sort( () =>{ 
//             return Math.random() - 0.5 
//         });
// };
// let array = [0,1,2,3,4,5,6,7,8,9];
// console.log(shuffle(array))
// 8. Получить первые элементы массива
// Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.
// let array = [1,2,3,4,5,6,7,8,9];

//  function getFirst(array, n=1) {
//     return array.slice(0, n);
// };

// console.log(getFirst(array));    // 1
// console.log(getFirst(array, 4)); // 1,2,3,4
// console.log(getFirst(array,-3)); // 1,2,3,4,5,6 


// 9. Получить последние элементы массива
// Напишите функцию getLast(array, n), которая возвращает фрагмент массива, содержащий последние 'n' элементов массива.
// let array = [1,2,3,4,5,6,7,8,9];

//  function getLast(array, n =1 ) {
//     return array.slice(-n);
// };

// console.log(getLast(array));     // 9
// console.log(getLast(array, 4));  // 6,7,8,9
// console.log(getLast(array, 12)); // 1,2,3,4,5,6,7,8,9 


// 10. Сумма элементов двух массивов
// Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6];
// function sumArr(array1,array2){
//     let sum = array1.map((num, index) => num + array2[index]);
//     return sum;
// }

// console.log(sumArr(arr1,arr2));



11. Количество повторяющихся элементов в массиве
Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.

// function countIdentic(arr) {
//     arr = arr.sort()
//     let newSort = [];
//     for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//     newSort.push(arr[i])
//     }
//     }
//     let result = newSort.filter((item, index) => {
//     return newSort.indexOf(item) === index;
//     })
//     return result.length
//     }
// console.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]))
// console.log(countIdentic([15,14,13,19,13,14,14,14,7,9,9]))   


// 12. Разворачивание массива массивов
// Напишите функцию expand(arr), которая разворачивает вложенный массив любой глубины.
// let arr1 = [1, [2,[3,[4]]]];
// let arr2 = [1, [2], [3, [[4]]],[5,6]];

// function expand(arr) {
//         return arr.toString().split(',').join(',');
    
// }

// console.log(expand(arr1)); // 1,2,3,4
// console.log(expand(arr2)); // 1,2,3,4,5,6


// 13. Объединить два массива без дублирования элементов
// Напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива.
// let array1 = [5, 2, 1, -10, 8];
// let array2 = [5, 2, 1, -9, 3, 7]; 

// let union = function(array1, array2) {
//     return [...new Set(array1.concat(array2))];
    
// }

// console.log(union(array1, array2)); // [-10,8,5,2,1,-9,3,7] 


// 14. Разница между двумя массивами
// Напишите функцию union, которая возвращает массив, содержащий все элементы arr1, которые не находятся в arr2 и наоборот.
// let arr1 = [1, 2, 'a'];
// let arr2 = [1, 2, 3, 4, 'b'];  

// function arrayDiff(arr1, arr2) {
//     return arr1.reduce((acc, curr) => {
//     return acc.indexOf(curr) !== -1? acc.filter(e => e !== curr) : acc.concat(curr);
//     }, arr2)
//     }
// console.log(arrayDiff(arr1, arr2)); // [a,3,4,b]


// 15. Сортировка массива по убыванию
// Напишите функцию compareNumbers(arr), которая возвращает массив, элементы которого отсортированы по убыванию их значений.
// var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];  

// function compareNumbers(arr){
//   return arr = arr.sort((a,b) => a -b);
    
// }

// console.log(compareNumbers(numbers)); // -4,1,2,3,3,5,6,7,8


16. Наиболее часто используемый элемент массива
Напишите код, который находит наиболее часто используемый элемент массива.
var arr1=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];  

     ваш код

document.writeln(output); // z повторяется 5 раз 


17. Сумма квадратов значений массива
Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.
function sumOfSquares(arr) { 

     ...ваш код...
}

document.writeln(sumOfSquares([1, 2, 3, 4, 5])); // 55


18. Сумма и произведение значений массива
Напишите код, который определяет сумму и произведение значений массива.
var arr = [ 1, 2 , 3 , 4 , 5 , 6 , 7, 8 ,9];

     ...ваш код...

document.writeln(" Сумма : "+sum + "Произведение : " + product); /* Сумма : 45
                                     Произведение : 362880 */


19. Удаление ложных значений из массива
Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустя строка).
array = [NaN, 0, 77, false, -17, '',undefined, 99, null];
function filterFalse(arr) {

     ...ваш код...

}

document.writeln(filterFalse(array)); // [ 77, -17, 99 ]


20. Сортировка массива объектов
Напишите код, который отсортирует массив объектов litmir по значению свойства title.
var litmir = [ 
   { author: 'Хэленка', title: 'Улетела сказка'},
   { author: 'Коул Кресли', title: 'Восстание Аркан'},
   { author: 'Райчел Мид', title: 'Золотая лилия'}
   ];

     ...ваш код...

// Восстание Аркан Золотая лилия Улетела сказка 



21. Найти пары чисел, сумма которых равна заданному значению
Напишите функцию findCouple(array, number), которая ищет в массиве все пары целых чисел, сумма которых равна заданному значению.
var num = 5;
var arr = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];

function findCouple(array, number) { 

     ...ваш код...

}

document.writeln(findCouple(arr, num));
// Ваша пара чисел: 1 + 4,Ваша пара чисел: 2 + 3


22. Найти все значения данного свойства в массиве объектов
Напишите функцию propertyValue(array, key), которая принимает в качестве аргументов массив объектов и имя свойства, а затем возвращает все значения данного свойства из массива объектов.
var litmir = [ 
   { author: 'Хэленка', title: 'Улетела сказка'},
   { author: 'Коул Кресли', title: 'Восстание Аркан'},
   { author: 'Райчел Мид', title: 'Золотая лилия'}
   ];

function propertyValue(array, key) {

     ...ваш код...

}

propertyValue(litmir, 'title');  // Улетела сказка,Восстание Аркан,Золотая лилия
propertyValue(litmir, 'author'); // Хэленка,Коул Кресли,Райчел Мид 


23. Общая стартовая подстрока в массиве строк
Напишите функцию startingSubstring(arr), которая возвращает общую начальную подстроку в массиве строк.
var arr1 = ['Капуста', 'Капитал'];
var arr2 = ['Репа', 'Редиска'];
function startingSubstring(arr) {

// Ваш код

}

var res1 = startingSubstring(arr1);
var res2 = startingSubstring(arr2);

document.writeln(res1); // Кап
document.writeln(res2); // Ре


24. Удалить определенный элемент из массива
Напишите функцию removeItem(arr, num), которая удаляет определенный элемент из массива.

     function removeItem(arr, num) {
          const index = arr.indexOf(num);
          if (index > -1) {
            arr.splice(index, 1);
          }
          return arr;
        }


        const sumAb = (a,b) =>{

          if(-2*10**9 <=a,b<= 2*10**9){
               let c = a +b;
               return c;
     } 
          }
          
          
        console.log(sumAb(5,2));
