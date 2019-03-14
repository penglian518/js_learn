var x = -1, y = 3;
var s = 'my' + 'string';

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
