"use strict";


let days = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

let week = days.join();

document.write(`${week} </br>`);


week.split(",").forEach(function (item) {
  document.write(`${item} </br>`)
});

document.write(week.split(",").slice(-2).join().italics() + '</br>');
let now = new Date()
document.write(week.split(",")[now.getDay() - 1].bold());

