var arr = [0, null, NaN, 0, 1, 2, 4, "str"];
var even = 0, odd = 0, zero = 0;

for (var i = 0; i < arr.length; i++)
{
  if (typeof arr[i] === "number" && !isNaN(arr[i])) {
  	if (arr[i] === 0) {
  		zero++;
  	} else if (arr[i] % 2 === 0) {
  		even++;
  	} else {
  		odd++;
  	}
  }
}

console.log("кол-во чётных элементов - " + even);
console.log("кол-во нечётных элементов - " + odd);
console.log("кол-во нулей - " + zero);

// Чтобы задание было выполнено верно, нужно ещё добавить проверку на 0 и отсечь нечисловые значения (как обсуждали в слак). И ещё небольшое замечание: использование массивов для подсчёта кол-ва элементов в данном случае избыточно. Здесь будет достаточно обычной числовой переменной-счетчика. Выше исправила на правильный варинат решения