//Task1
//Simple return of an anonymous function which returns the multiplication of x and y
function multiplication(x) {
    return function(y) {
      return x * y
    };
  }
  
  multiplication(7)(2); // 14


//Task2
/*To select a random index, mathematical random is used multiplied
  by the number of array elements and rounded Math.floor*/
function getRandomNumber(arr) {
  let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
  
function makeRandomFn(arr){
  return getRandomNumber(arr);
}
  
getRandomNumber = makeRandomFn([1, 2, 100, 34, 45, 556, 33]);


//Task3
/*To use any number of arguments, a pseudo-array of arguments is used. 
To transfer numbers to the next array, push them into the created array and find a random index*/
function getRandomNumberMod(arr) {
  let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
  
function makeRandomFnMod() {
  let arr = [];
  for(let i = 0; i < arguments.length; i++){
   arr = [...arguments];
}
  return getRandomNumberMod(arr);
}
  
getRandomNumberMod = makeRandomFnMod(1, 2, 100, 34, 45, 556, 33);
