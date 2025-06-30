/*Functions in JS is a block of code designed to perform a specific task. Functions help you resue code and organize logic.

 */

// Basic Synext to create a function (Function declaration)
function sayHello(){
        console.log("Hello");
}

// calling the function
sayHello();

// you can also declare a function with paramenters
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Priya"); // Output: Hello, Priya!


// function is also can reatrun a value
function add(a, b){
        // let ans = a+b or 
        // return ans  
        // or     
        return a+b;

}

//  Function Expression (assigning a function to a variable)
const greetHr = function(){
        console.log("Good moring Hr. I hope you are doing well.");
}


function nothingHappen(){
        let name  = "Priya";
        if(true){
                let name = "Pal";
                console.log(name);
        }
        console.log(name);
}

nothingHappen();
