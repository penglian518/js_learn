let x = -1, y = 3;
let s = 'my' + 'string';

/* if one of the operands is a string, the others are converted to strings
combine from left to right
*/ 
console.log("My string is: ", s+x+y);
console.log("My string is: ", x+y+s);
console.log('+ convert bool to number: ', +true);          // + convert bool to 1
console.log('+ convert "" to 0: ', +"");                   // + convert "" to 0
console.log('+ convert string "2" to number: ', +"2");     // '+ convert string "2" to number'
console.log('+ can NOT convert -1 to +1!: ', +x);          // + can NOT convert -1 to +1!
console.log('++ prefix (++x) --> the new values: ', ++x);
console.log('++ postfix (x++) --> the OLD values: ', x++);
let a = (1+2, 3+4);
console.log(", returns ONLY the last part: ", a);
console.log("");

// == convert two side and compare
// === doesn't convert
console.log('0==false? ', 0==false);
console.log('0===false? ', 0===false);
console.log('null==undefined? ', null==undefined);
console.log('null===undefined? ', null===undefined);
console.log('null>0? ', null>0);
console.log('null==0? ', null==0);
console.log('null>=0? ', null>=0, '!!!');
console.log('undefined>=0? ', undefined>=0);
console.log('');

/*  alert, prompt, confirm, 3 browser-specific functions 
*/
//let age=prompt('How old are you?', 100);
//console.log(`You are ${age} years old!`);

/* if, while, do...while, for, switch...case are similar to that in C++!

    if () {     //0, empty string "", null, undefined, and NaN all convert to false
    };          //others convert to true, includes the string "0"!
 
    if () {
    } else if () {
    } else {
    }

    while(){};
    do{} while();
    for(;;){};
    for(let i=0; i<10; i++){};
*/
console.log("if, while, do...while, for, switch...case, are similar to that in C++!");
console.log("break 'label', allows to break the outer loop!\n");

let age = 20;
let accessAllowed = (age >= 18) ? true: false;      // ternary operator "?"
if (accessAllowed) {
    console.log(`Your age is ${age}, you are allowed to access!`);
} else {
    console.log(`Your age is ${age}, you are NOT allowed to access!`);
}

const PI = 3.1415926;    // declear a constant that cannot be changed.
let myTemplates = `This is
            my templates. 
            The pi is ${PI} in this case.
            The type of PI is ${typeof(PI)}.
            The type of PI.toString() is ${typeof(PI.toString())}.`;
console.log(myTemplates);

/*  The regular functions are similar to those in C++, except
    1. starts with the key word function
    2. w/o return
    3. function expressions
    4. arrow functions

    function funcName() {
    }

    e.g.
    // Arrow functions
    let sum = (a, b) => a + b;

    // function expression
    let sum = function(a,b) {
        return a + b;
    };

    // regular functions
    function sum(a, b) {
        return a + b;
    }


*/

function min(a,b) {
    return a<b ? a:b;
}
console.log("The smaller one in (3,-1) is: ", min(3,-1));
console.log(min);

// callbacks (callback functions) in JS. The paramenters are functions to execute
let a1 = Math.random();
let a2 = Math.random();

// solution 1.
function ask(question, yesFunc, noFunc) {
    return (a1 < a2) ? yesFunc():noFunc();
}
ask('Do you agree?', 
    function(){console.log('OK, you agreed.')}, 
    function(){console.log('No, you cancelled.')})

// solution 2. (simplified the Function with Function Expression)
let ask1 = (a1 < a2) ?
    function(){console.log('OK, you agreed.')} : function(){console.log('No, you cancelled.')};
ask1();

// solution 3. (simplified the Function Expression with Arrow Functions)
let ask2 = (a1 < a2) ? 
    () => console.log('OK, you agreed.') : () => console.log('No, you cancelled.');
ask2();

/*  Data types
    Numbers:
        1. toString(base)
        2. Math.floor, Math.ceil, Math.round, Math.trunc       // rounding
        3. toFixed(n)      // round to n digits after the point and returns a string!
        4. 0.1 + 0.2 = 0.30000000000000004     // imprecise calculations. Use toFixed() to solve this problem!
        5. NaN is a unique value, it does not equal to anything, including to itself.
        6. Infinity and -Infinity are special numerica values
        7. isNaN() and isFinite()
        8. parseInt() and parseFloat()

*/

console.log(0xff);          // hexadecimal
console.log(0b11111111);    // binary form
console.log(0o377);         // octal form
let num = 255;
console.log(typeof num.toString(), num.toString());     // base 10
console.log(typeof num.toString(16), num.toString(16)); // base 16
console.log(typeof num.toString(2), num.toString(2));   // base 2
console.log(typeof num.toString(8), num.toString(8));   // base 8

console.log(255..toString(2));      // two dots to call a method!

let sum = 0.1 + 0.2;
myTemplates = `
    0.1 + 0.2 == 0.3 ? : ${sum == 0.3}
    0.1 + 0.2 == ${sum};
    let sum = 0.1 + 0.2;    +sum.toFixed(2) == 0.3 : ${+sum.toFixed(2) == 0.3};
    Math.round(6.35): ${Math.round(6.35)}
    6.35.toFix(1) is ${6.35.toFixed(1)} not 6.4 ?! ${6.35.toFixed(20)}
    Math.round(6.35 * 10)/10: ${Math.round(6.35*10)/10}

    0 == -0 ? : ${0 == -0}
    NaN === NaN ? : ${NaN === NaN}      // NaN does not equal to anything, including to itself.
    isNaN("string")? : ${isNaN("str")}      // isNaN convert to a number first.
    isFinite("string")? : ${isFinite("str")}        // because "str" is NaN which is not a Finite
    parseInt("100px"): ${parseInt("100px")}
    parseInt("a100px"): ${parseInt("a100px")}
    parseInt("0xff"): ${parseInt("0xff")}
    parseInt("ff"): ${parseInt("ff")}
    parseInt("ff", 16): ${parseInt("ff", 16)}
    "string".length: ${"string".length}
    "string"[0]: ${"string"[0]}
    "string".slice(0, 4): ${"string".slice(0,4)}
    "string".substring(0, 4): ${"string".substring(0,4)}
    "string".startsWith("S"): ${"string".startsWith("S")}
    "string".indexOf("t"): ${"string".indexOf("t")}
    "string".codePointAt(0): ${"string".codePointAt(1)} // the UTF-16 code of "t"
    String.fromCodePoint(116): ${String.fromCodePoint(116)} // the 116th letter in UTF-16
    "string".repeat(3): ${"string".repeat(3)}
    " string ".trim(): ${" string ".trim()}

`;

console.log(myTemplates);

/*  Arrays
        push pop shift unshift
        for .. of loop
        splice, slice
        forEach(function)       // iterate an array
        indexOf lastIndexOf     // searching 
        find findIndex          // find the first true
        filter                  // find all true
        map                     // transform. apply a func to each element and collect the results
        sort(func)              // sort((a,b) => a-b) sort numerically.
        reduce(func, initial)
*/

let fruits = ['Apple', 'Orange', 'Plum'];

for (let f of fruits) {
console.log(f);
}

console.log(fruits[fruits.length-1]);
console.log(fruits.toString());
console.log(fruits.concat(fruits));
fruits.splice(1,1);     // from index delete n elements
console.log(fruits);
fruits.splice(1, 0, 'Orange', 'Grape'); // from index(1) delete 0 element, and add others
console.log(fruits);
console.log(fruits.slice(1,3));
fruits.forEach((item, idx, arr) => {console.log(`The index of ${item} is ${idx}.`)});
console.log(fruits.find((i) => i.startsWith('G')));     // find(some functions)
console.log(fruits.map((i) => i.length));               // transform to the length of each item
console.log('Apple,Orange,Plum'.split(','));
//console.log(Array.from(Array(10).keys()));              // range(10) in Python
let arr1 = Array.from(Array(10).keys());
console.log(arr1.reduce((a,b) => a+b, 0));              // the sum of range(10)


// iterator
let range = {
    from: 1,
    to: 5,

    // iterator function. Symbol.iterator is a special build-in symbol
    [Symbol.iterator](){
        this.current = this.from;
        return this;
    },

    // next function. next() is required by iterator
    // the result of next() must have the form {done: Boolean, value: any},
    // when done=true means the iteration is finished, 
    // otherwise value must be the NEW value.
    next(){
        if (this.current <= this.to) {
            return {done: false, value: this.current++};
        } else {
            return {done: true};
        }
    },

}

for (let num of range) {
    console.log(num);
}

// array like (has indexes and length)
let arrayLike = {
    0: "hello",
    1: "world",
    length: 2,
};

// convert array like to a real array using the universal method Array.from
let arr = Array.from(arrayLike);
for (let i of arr) {
    console.log(i);
}
console.log(arr.pop());


/* Objects
 * An object can be created with {} with an optional list of properties.
 * A property is a "key:value" pair.
 * key -> property name, number will be converted to string automatically
 * Symbol can be used as key, should be put in []
 * 
 * e.g. 
 * let id = Symbol("id");
 * let user = {
 *      name: "John",
 *      [id]: 123,      // the key [id] is a symbol.
 * }
 * 
*/

//let user = Object(); 
let user = {};      // define an object
// define the properties
user.name = "John";
user['full name'] = "John Smith";
user['age'] = 30;
user.sex = "male";
// delete property
delete user.sex;

console.log(user);
console.log("Is dob in user? ", "dob" in user);
// the value of undefined property is "undefined"
console.log("The value of dob: ", user.dob);    

//"for ... in" loop to show all properties of an obj
for (let k in user) {
    console.log(k, user[k]);    // use [] instead of . to access the value!
}

// two independent objects are not equal.
console.log("Is {} == {}? ", {}=={});
user.sizes = {"height": 180, "width": 50};

// clone an object
let user1 = Object.assign({}, user);
console.log(user1);
console.log("Note: user and user1 shared the same property 'sizes'!\n\
    One solution is to use _lodash lib to deep clone an obj.");


/* Symbol is a special type in JS
 *  Symbols don't auto-convert to a string, have to use .toString() function
 */

let id = Symbol();
let id1 = Symbol("id_descrip");    // "id_descrip" is an optional description of this symbol
let id2 = Symbol("id_descrip");

console.log("id1 === id2? ", id1 === id2);
console.log(`${id1.toString()}`);

let user2 = {
    name: "John",
    [id]: 0, 
}

user2.id = "new id";
console.log("Symbol key cannot be changed by '.' method: ", user2);
user2[id] = "new id";
console.log("Symbol key cannot be changed by '[]' method: ", user2);

for (let i in user2) {
    console.log(i, ": ", user2[i]);
}

// global symbols
let id3 = Symbol.for("id_descrip");
let id4 = Symbol.for("id_descrip");
console.log("id3 === id4? ", id3 === id4);
console.log(Symbol.keyFor(id3));

// system symbols
// Symbol.iterator, Symbol.hasInstance, Symbol.toPrimitive, ...

/* Object methods, this
 * 
 * Note: in JS 'this' can be used to any function.
 */

// add a method to the obj user
user.sayHi = function () {
    console.log(`Hi! This is ${this.name}. I'm ${this['age']} years old.`);
}
user.sayHi();

// an alternative way to define methods
let user3 = {
    name: "John Smith",
    age: 30,

    // method of the obj user3
    sayHi() {
        console.log(`Hi! This is ${this.name}. I'm ${this['age']} years old.`);
    }
}
user3.sayHi();
