// Problem 1: Check if a number is even or odd using bit manipulation
function evenOdd(n){
  if((n & 1) === 0){                         //& is the bitwise AND operator
                                             //It compares each bit of n with 1
                                            // the least significant bit matters her
    return "Even";
  } else if (n & 1 === 1){
    return "Odd"
  }
  
}
console.log(evenOdd(6));
