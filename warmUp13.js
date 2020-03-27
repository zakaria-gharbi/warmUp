// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n
//starting from 0, e.g.:
// mult(3); // => 6
// mult(4); // => 24
  function mult(n){
   var mult=0;
   for (var i = 1; i < n; i++) {
     mult =mult+mult*i;
   }
    
      return mult ;
    }

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number.
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...
     function string(n){
     	var i =0;
     	while(i<n){
         i++;    
     	 return i," ",n;
     	}

     }