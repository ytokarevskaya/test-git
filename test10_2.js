x = prompt("Введите x: ");

if (typeof(x) == "number") {
    console.log(x +" - число")
} else if (typeof(x) == "string") {
    console.log(x +" - строка")
} else if (typeof(x) == "boolean") {
    console.log(x +" - логический")
} else {
   console.log("Тип x не определён")
}