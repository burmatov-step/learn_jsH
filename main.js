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
  if (
    (item === "Суббота" && index === new Date().getDay() - 1) ||
    (item === "Воскресенье" && index === new Date().getDay() - 1)
  ) {
    document.write(`${item.bold().italics()} </br>`);
  } else if (index === new Date().getDay() - 1) {
    document.write(`${item.bold()} </br>`);
  } else if (item === "Суббота" || item === "Воскресенье") {
    document.write(`${item.italics()} </br>`);
  } else {
    document.write(`${item} </br>`);
  }
});

