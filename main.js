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
let month = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];
let day = document.querySelector(".day");
let daySecond = document.querySelector(".daySecond");

function firstDate() {
  let date = new Date();
  let hours;
  let dayS = date.getDate();
  let monthS = date.getMonth() + 1;
  let hourS = date.getHours();
  let minuteS = date.getMinutes();
  let secondS = date.getSeconds();

  if (date.getHours() === 0 || (date.getHours() > 5 && date.getHours() < 21)) {
    hours = "часов";
  } else if (date.getHours() === 1 || date.getHours() === 1) {
    hours = "час";
  } else {
    hours = "часа";
  }
  day.textContent = `Сегодня ${days[date.getDay() - 1]}, ${date.getDate()} ${
    month[date.getMonth()]
  } ${date.getFullYear()} года, ${date.getHours()} ${hours} ${date.getMinutes()} минут ${date.getSeconds()} секунд`;

  if (dayS < 10) {
    days = "0" + days;
  }
  if (monthS < 10) {
    monthS = "0" + monthS;
  }
  if (hourS < 10) {
    hourS = "0" + hourS;
  }
  if (minuteS < 10) {
    minuteS = "0" + minuteS;
  }
  if (secondS < 10) {
    secondS = "0" + secondS;
  }
  daySecond.textContent = `${dayS}.${monthS}.${date.getFullYear()} - ${hourS}:${minuteS}:${secondS}`;
}

setInterval(() => {
  firstDate();
}, 1000);
