// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/*
nestedFunction can access internal because both nestedFunction() and const internal are within myFunction(){} 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(n){
  return counter();
  }
  const counter=() => { 
    let sum = 0;
    for(let i = 1; i <= n; i++){
      sum = sum + i;
    }
      return sum;
    } 
    summation(4);