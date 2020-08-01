let fruits = new Map([

  ["apple", "green"],

  ["strawberry", "red"],

  ["blueberry",    "blue"]

]);


fruits.forEach(function(value,key) {
  console.log('Ключ = ' + key +', Значение = ' + value);    
});
