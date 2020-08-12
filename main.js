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

for(let i = 0; i<= 100; i++){

  if(i % 2 !== 0){
    console.log(`Делитель этого числа: 1 и ${i}`);
  }
}