/*
JavaScript provides three keywords to declare variables: var, let, and const.
They differ in scope, hoisting behavior, and re-assignment rules.
*/

// var -> Declares variables with **function or global scope**. 
// It allows **re-declaration** and **updating** within the same scope.

{
    var accountPassword = "123";
}
console.log(accountPassword); // Accessible due to var's function/global scope

var accountPassword = 123; // Re-declaration is allowed
var accountPassword = "Priya"; // Again, re-declaration is allowed


// let -> Declares variables with **block scope**.
// It allows **updating** but does **not allow re-declaration** within the same scope.

{
    let num = 2;    
    // let num = 5; // ❌ Error: Cannot re-declare 'num' in the same block
    num = "p"; // ✅ Allowed: Value can be updated
}

// console.log(num); // ❌ Error: 'num' is not defined (because of block scope)


// const -> Declares variables with **block scope** like let,
// but the value **cannot be updated or re-declared**.

const n1 = 12;
// n1 = 20; // ❌ Error: Assignment to constant variable
// const n1 = 25; // ❌ Error: Identifier 'n1' has already been declared
