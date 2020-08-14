"use strict";


let week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];


week.forEach(function (item, index) {
  if(item === 'Суббота' || item === 'Воскресенье'){
    document.write(`${item.italics()} </br>`);
  } else if(index === new Date().getDay() - 1 ){
    document.write(`${item.bold()} </br>`);
  } else{
    document.write(`${item} </br>`);
  }

})
// let week = days.join();

// document.write(`${week} </br>`);


// week.split(",").forEach(function (item) {
//   document.write(`${item} </br>`)
// });

// document.write(week.split(",").slice(-2).join().italics() + '</br>');
// let now = new Date()
// document.write(week.split(",")[now.getDay() - 1].bold());
