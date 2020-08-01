var a = +prompt("Введите a: ");

if (Number.isNaN(a)) {
  console.log("Упс, кажется, вы ошиблись")
} else if (a % 2 === 0){
    console.log(a +" чётное число")
  } else if (a % 2 !== 0) {
    console.log(a +" нечётное число")
  }