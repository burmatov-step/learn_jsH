'use strict'

let arr = []

function arrNumber() {
  for(let i = 7; i > 0; i--){
    let num;
    num = prompt(`Введите 7 многозначное число, осталось: ${i}`);
    arr.push(num);
  }
  return arr
}
arrNumber();

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] == 2 || arr[i][0] == 4) console.log(arr[i]);
}

let array = [];

for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    let num = i / j;

    if (Number.isInteger(num)) {
      array.push(num);
    }
  }

  if (array.length === 2) {
    console.log(`${i}: Делители этого числа: 1 и ${i}`);
  }

  array = [];
}