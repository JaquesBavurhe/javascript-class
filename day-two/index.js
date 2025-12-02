let val = "43"

//changing data type of the variable from string to number
console.log(parseInt (val) +20) //63
console.log(Number(val)+20) //63

//changing variable datatype to a string from a number

let age = 23
console.log(String(age)+20); //2320


let firstName = "jaques"

// capitalize first letter
let capitalize = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}`


//spliting strings
let name = "jaques bavurhe"
let splitName = `${name.split()}`
console.log(splitName)