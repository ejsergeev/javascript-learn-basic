/*

  1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

*/

let number = 2
let divider = 2


point:
while(number < 100) {

  if (divider < number) {

    if (number % divider == 0) {
      number++
      divider = 2
      continue point

    }

    divider++
    continue point
    
  }

  divider = 2
  console.log(number)
  number++

}

/*
  2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
    a) Организовать такой массив для хранения товаров в корзине;
    b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/


basket = [
  ['apple', 10],
  ['pear', 20],
  ['orange', 15],
  ['strawberry', 30],
  ['melon', 60]
]

function countBasketPrice(basket) {
  let sum = 0
  for(let val of basket) {
    sum += val[1]
  }
  return sum
}

console.log(...basket)
console.log('Total count: ' + countBasketPrice(basket))

/*

  3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:

  for(…){// здесь пусто}

*/


for(let i = 0; i <= 9; console.log(i++)) {

}

/*

  4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

  x
  xx
  xxx
  xxxx
  xxxxx
  
*/

let str = 'x'

do {
  console.log(str)
  str += 'x'
} while (str.length < 20)