//1.COMMENTS AND DOCUMENTATION
// My name is jaques bavurhe

/*
 My name is Jaques Bavurhe.
 A student at refactory 
*/

//2.VARIABLE DECLARARTION WITH let
let username = "Jaques";
console.log(username);

//3.VARIABLE DECLARARTION WITH const
const appName = "LearningJS";
console.log(appName);

//4.CHECKING DATA TYPES
let age = 25;
let isStudent = true;
let school = "Refactory";

console.log(typeof age);        
console.log(typeof isStudent);  
console.log(typeof school);     

//5. CONCATENATION
let firstName = "Jaques";
let lastName = "Bavurhe";

let fullName = firstName + " " + lastName;
console.log(fullName);

//6. BASIC ARITHMETIC WITH NUMBERS
let x = 10;
let y = 4;

console.log(x + y);  // 14
console.log(x - y);  // 6
console.log(x * y);  // 40
console.log(x / y);  // 2.5

//7. BOOLEAN LOGIC
let loggedIn = true;
let hasPaid = false;

console.log(loggedIn); 
console.log(hasPaid); 
console.log(!loggedIn);      

//8. UNDEFINED VS NULL 

let a;         // undefined
let b = null;  // null

console.log(a);       // undefined
console.log(b);       // null

//9. TYPEOF OPERATOR
console.log(typeof 10);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" 

//10. CONSOLE.LOG() PRACTICE
console.log("Debugging message 1");
console.log("The value of x is:", x);
console.log("The full name is:", fullName);
