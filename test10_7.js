
var arr = [12, 42, 63, 56, 122, 17, 117, 25, 645, 722, 964];
var arr1 = [];
var arr2 = [];

for (var i = 0; i < arr.length; i++)
{
  if ((arr[i] % 2) === 0)
  {
    arr1.push(arr[i]);
  } else if ((arr[i] % 2) !== 0)
  {
    arr2.push(arr[i]);
  }
}

console.log("кол-во чётных элементов - " +arr1.length);
console.log("кол-во нечётных элементов - " +arr2.length);