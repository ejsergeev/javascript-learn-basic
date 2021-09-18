/*

  1. Дан код:

  var a = 1, b = 1, c, d;
  c = ++a; alert(c);           // 2 - присваивается увеличенное значение 
  d = b++; alert(d);           // 1 - присваивается текущее значение, затем увеличивается
  c = (2+ ++a); alert(c);      // 5 - прибавляется увеличенное значение
  d = (2+ b++); alert(d);      // 4 - пребавляется текущее значение, затем увеличивается
  alert(a);                    // 3 - значение было увеличино 2 раза
  alert(b);                    // 3 - значение было увеличино 2 раза

  Почему код даёт именно такие результаты?

*/

/*
  2. Чему будет равен x в примере ниже?

  var a = 2;
  var x = 1 + (a *= 2);

  Будет равен 5

*/

/*

  3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
  Затем написать скрипт, который работает по следующему принципу:

  если a и b положительные, вывести их разность;
  если а и b отрицательные, вывести их произведение;
  если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

*/

const a = 2
const b = -4

if (a > 0 && b > 0) {
  console.log(a - b)
} else if (a < 0 && b < 0) {
  console.log(a * b)
} else {
  console.log(a + b)
}

/*

  ### 4. Присвоить переменной а значение в промежутке [0..15]. 
  С помощью оператора switch организовать вывод чисел от a до 15.

*/

let someNumber = 2

switch(someNumber) {
  case 0:
    console.log(0)
  case 1:
    console.log(1)
  case 2:
    console.log(2)
  case 3:
    console.log(3)
  case 4:
    console.log(4)
  case 5:
    console.log(5)
  case 6:
    console.log(6)
  case 7:
    console.log(7)
  case 8:
    console.log(8)
  case 9:
    console.log(9)
  case 10:
    console.log(10)
  case 11:
    console.log(11)
  case 12:
    console.log(12)
  case 13:
    console.log(13)
  case 14:
    console.log(14)
  case 15:
    console.log(15)
}

/*

  ### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
  Обязательно использовать оператор return

*/

function multiplication(x, y) {
  return x * y
}

function devision(x, y) {
  return x / y
}

function addition(x, y) {
  return x + y
}

function substraction(x, y) {
  return x - y
}

/*

  ### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
  где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
  В зависимости от переданного значения операции выполнить одну из арифметических операций 
  (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

*/

function calc(arg1, arg2, operation) {
  switch(operation) {
    case 'multiplication':
      return multiplication(arg1, arg2)
    case 'devision':
      return devision(arg1, arg2)
    case 'addition':
      return addition(arg1, arg2)
    case 'substraction':
      return substraction(arg1, arg2)
  }
}

/*

  7. *Сравнить null и 0. Попробуйте объяснить результат.

    так указано в спецификации, работа алгоритма сравнения js

*/

/*

  ### 8. *С помощью рекурсии организовать функцию возведения числа в степень. 
  Формат: function power(val, pow), где val – заданное число, pow – степень.

*/

function powerValue(val, pow) {
  if (pow === 0) return 1
  return val * powerValue(val, pow - 1)
}
