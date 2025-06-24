/* 
String in JS is a primitive data type that represents a sequence of characters,
primarily used to store and manipulate text. 
Strings can be created using single quotes 'Ram', double quotes "Ram", or backticks `Ram`.
*/

// Let's see how we can declare a string:

//  Way one → This is a primitive string (stored as a primitive value)
let name = "Priya"; // primitive

// Way two → This creates a String object (non-primitive)
let l_name = new String("Pal"); // object

// This will print false because both are different in type:
// 'name' is a primitive string, 'l_name' is a String object
if (name === l_name) {
    console.log(true);
} else {
    console.log(false); // This will be printed
}
