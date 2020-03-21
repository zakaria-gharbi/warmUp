// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']
var objKey = obj => {
  return Object.keys(obj);
};
// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2
var objLength = obj => {
  return Object.keys(obj).length;
};

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]

var objSort = (array, track, newArr) => {
  var track = track || 0;
  var newArr = newArr || [];

  if (newArr.length === array.length) {
    return newArr;
  }

  for (var i = 0; i < array.length; i++) {
    console.log(array[i].id, "the array element");

    if (array[i].id === track) {
      console.log(array[i], "the if array[i].id");
      newArr.push(array[i]);
    }
  }

  return objSort(array, ++track, newArr);
};
