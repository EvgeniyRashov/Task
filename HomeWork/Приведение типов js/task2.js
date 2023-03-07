console.log(Number('10'), typeof Number('10')); // явное
//1
console.log(+'50'); // не явное
//2            
console.log(Number('100')); //явное
//3
console.log('' + 1); //явное
//4
console.log(String(1)); //не явное
//5
console.log(Boolean(0)); //явное
//6
console.log(+'001'); //не явное
//7
console.log(1 + ''); //явное
//8
console.log(Boolean(1)); // явное
//9
console.log(String(001)); // не явное
//10
console.log(Number('Hello World')); //не явное






console.log(Number(console.log), Boolean(console.log), String(console.log));
console.log(Number({ name: 'Maxim' }), Boolean({ name: 'Maxim' }), String({ name: 'Maxim' }));
console.log(Boolean(Symbol('key')), String(Symbol('key')));
console.log(Number(Number), Boolean(Number), String(Number));
console.log(Number(''), Boolean(''), String(''));
console.log(Number(0), Boolean(0), String(0));
console.log(Number('-105'), Boolean('-105'), String('-105'));