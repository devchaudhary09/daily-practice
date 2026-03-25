// TIME COMPLEXITY 

/* Question 1:-

i = 0;

while (i < n) {

       i = i + 1;            

       i = i * 2;
}
 analysis 
  i= (0+1)*2 = 2
  i = (2+1)*2 = 4
  i = (4+1)*2 = 8
  i = (8+1)*2 = 16

  [ i is doubling every time , after k itretaion i is approx 2^k+1 - 2 , the loop stops when i >= n
   2^k ~ n and showing k for k:
   k ~ log2 b ]
    TIME COMPLEXITY = O(log n)
    _______________________________________________________________________________________________

    Question 2:-

i = 0;

j = 0;

while (i < n) {

    while (j < n) {

 j++;

    }

  i++;

}

[ its look like nested loop but j = 0 is initialized outside the first while loop 
 so 
 in the first iteration of the i loop the inner j loop runs n times untill j = n.
 
 in the second iteration of i loop the condition while (j < n ) is alredy false bcs j was never reset to 0
 
 
bcs j is not reset to inside i loop the inner and outer loops runs n times 

total operation 2n 
time complexity = O(n)]
____________________________________________________________________________________________________________


Question 3:-

sum = 0;

for (int i = 0; i < n; i++) {

    for (int j = i; j < n; j++) {

        sum += i * j;

    }

}

[ 
      j = i 
      number of iteration 
      when i = 0 inner loop runs n times (n-1)
          i = 1                  n-1 (1 to n-1)
          i = 2                 n-2
          i = n=1                  1

  TOTAL = n + (n-1)+ (n-2)+......+1 = n(n+1)/2
        = n(n+1)/2 = n^2/2 + n/2

        time complexitiy = O(n^2)
]
        ________________________________________________________________________________________________


        Question 4:-

for (int i = 1; i <= n; i *= 2) {

  // Some operation

}

[ 
    its again doubling every step like above 
    value of i after each iteration k:

    k = 0: i = 1(2^0)
    k = 1: i = 2(2^1)
    k = 2 : i =4(2^2)
    
    k = k : i = 2^k

    loop contineus as i <= n
    for k: 2^k <= n

    k <= log2(n)

    TIME COMPLEXITY = O(log n )

]
    ____________________________________________________________________________________________________-


    Question 5:-

for (int i = 0; i < n; i++) {

    for (int j = 0; j < n; j++) {

        for (int k = 0; k < n; k++) {

            // Some operation

        }

    }

}

[
  i runs n times 
  for every i j runs n times 
  for every j k runs n times 

  n * n * n = n^3

  TIME COMPLEXITY = O(n^3)

]
  _____________________________________________________________________________________________________________

  Question 6:-

if(i>j){

j==0? j++ : j--;

}

[
   there are no loops 
   if statement is a single comparison 

   TIME COMPLEXITY O(1)
]
   ____________________________________________________________________________________________________________

   STRUCTURE                      COMPLEXITY 
  
   i = i * 2                      O(log n )
   Nested (no reset)              O(n)
   nested (dependent)             O(n^2)
   i*= 2                          O(log n)
   Triple Nested                  O(n^3)
   Simple if/else                 O(1)
  */    

   //ROTATE AN ARRAY K TIMES 

   function rotateArray(arr, k){
    let n = arr.length;
    k = k % n;                                // for avoid extra rotation 
    let result = [];                                         

    for(let i = n-k; i< n; i++){
      result.push(arr[i]);
    }
    for(let i = 0; i < n-k; i++){
      result.push(arr[i]);
    }
    return result;
   }
   console.log(rotateArray(arr, k));