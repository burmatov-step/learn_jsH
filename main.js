"use strict";



let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = numberPlay();
start();

function numberPlay(x = 9) {
  let num = Math.ceil(Math.random() * 100);
  return function number() {
    let ourNumber = prompt("Угадай число от 1 до 100");
    if (ourNumber === null) {
      alert("Возвращайтесь еще!");
      return;
    } else if (!isNumber(ourNumber)) {
      alert("Введите число");
      number();
    } else if (+ourNumber > num && x !== 0) {
      alert(`Загаданное число меньше, осталось попыток ${x}`);
      x--;
      number();
    } else if (+ourNumber < num && x !== 0) {
      alert(`Загаданное число больше, осталось попыток ${x}`);
      x--;
      number();
    } else if (+ourNumber === num) {
     let good =  confirm("Поздравлю, вы угадали!!! Хотели бы сыграть еще?");
      if (good === true) {
        numberPlay()();
      } else {
        return;
      }
    } else if (x === 0) {
     let end =  confirm("Попытки закончились, хотите сыграть еще?");
     if(end === true){
       numberPlay()();
     } else{
       return;
     }

    }
  };
}


