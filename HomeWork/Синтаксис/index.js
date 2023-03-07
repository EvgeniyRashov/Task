//  JavaScript код с созданием переменных 

/*
Автор
Ваше Имя и Фамилия либо никнейм
*/

let myName = 'Евгений',
    mySurname = 'Онегин',
    myFavoriteDrink = 'кофе',
    myFavoriteAnimal= 'Собака',
    myFavoriteProgrammingLanguage = 'JS';


console.log(myName);
console.log(mySurname);
console.log(myFavoriteDrink);
console.log(myFavoriteAnimal);
console.log(myFavoriteProgrammingLanguage);


//Типы данный
let num = 10,
    str = 'Hello Word',
    bool = false;

    num = 'ягода';
    str = 10;
    bool = null;

console.log(num,str,bool)


let ageOfPerson1 = 18;
let ageOfPerson2 = '20';

ageOfPerson2 = ageOfPerson1;
console.log(ageOfPerson2, typeof ageOfPerson2)

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';

nameOfAnimal2 = nameOfAnimal1;
console.log(nameOfAnimal2, typeof nameOfAnimal2)


const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';
console.log('Переменную с const переопределить нельзя', typeof bestProgrammingLanguage2)

let initialValue1;
let initialValue2 = 0;
initialValue2 = initialValue1;
console.log(initialValue2, typeof initialValue2)

// var isJavaScriptProgrammer1 = true;
// var isJavaScriptProgrammer2 = false;
// console.log('var является устаревшим');

let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;

isJavaScriptProgrammer2 = isJavaScriptProgrammer1;
console.log(isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2);

let helloText1 = 'Hello!';
let helloText2 = 'Привет!';
console.log(helloText2, typeof helloText2);


//  Приведение типов в JavaScript
let number = 10,
      string = 'Hello',
      boolean = false,
      getNull = null,
      getUndefined = undefined,
      object = { name: 'Женя'},
      bigint = 25n;
      getSymbol = Symbol(1);


console.log(Number(number), Boolean(number), String(number));
console.log(Number(string), Boolean(string), String(string));
console.log(Number(boolean), Boolean(boolean), String(boolean));
console.log(Number(getUndefined), Boolean(getUndefined), String(getUndefined));
console.log(Number(object), Boolean(object), String(object));
console.log(Number(bigint), Boolean(bigint), String(bigint));
console.log(Number(getSymbol), Boolean(getSymbol), String(getSymbol));






