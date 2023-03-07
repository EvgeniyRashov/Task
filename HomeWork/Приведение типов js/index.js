
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






