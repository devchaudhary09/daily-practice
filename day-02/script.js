// Problem 1: Check if a number is even or odd using bit manipulation
function evenOdd(n){
  if((n & 1) === 0){
    return "Even";
  } else if (n & 1 === 1){
    return "Odd"
  }
  
}
console.log(evenOdd(6));