//1. String concatenation
let firstName = "Jaques"
let lastName = "Bavurhe"

let fullName = firstName + " " + lastName
console.log(fullName);


//2. template literals 
let age =23
let message = `I am ${age} years old`

console.log(message);

//3. Type checking and conversion
// Checking types
let num = 55
let price = "450";
let isAvailable = "true";


console.log(typeof age);          
console.log(typeof price);        
console.log(typeof isAvailable);  


//4. Type conversion
let priceNumber = Number(price);      
let ageString = String(age);          
let boolValue = Boolean(isAvailable); 

console.log(priceNumber);  
console.log(ageString);    
console.log(boolValue);    

// Extra truthy/falsy examples
console.log(Boolean(""));   
console.log(Boolean(0));    
console.log(Boolean("hi")); 


//5. Use string methods

let text = "  Jaques Bavurhe  ";

// trim
let clean = text.trim();       

// toUpperCase
let upper = clean.toUpperCase();   

// includes
let hasJaques = clean.includes("Jaques"); 

// replace
let replaced = clean.replace("Bavurhe", "Johnson");

// split
let parts = clean.split(" ");   

console.log(clean);
console.log(upper);
console.log(hasHello);
console.log(replaced);
console.log(parts);


