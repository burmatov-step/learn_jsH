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
  let minutess;
  let secondss;
  let dayS = date.getDate();
  let monthS = date.getMonth() + 1;
  let hourS = date.getHours();
  let minuteS = date.getMinutes();
  let secondS = date.getSeconds();
  let minutVal = +date.getMinutes().toString().slice(-1);
  let secondVal = +date.getSeconds().toString().slice(-1);

  if (date.getHours() === 0 || (date.getHours() > 5 && date.getHours() < 21)) {
    hours = "часов";
  } else if (date.getHours() === 1 || date.getHours() === 1) {
    hours = "час";
  } else {
    hours = "часа";
  }

  if (
    minutVal === 0 ||
    (minutVal > 4 && minutVal < 10) ||
    (minuteS > 9 && minuteS < 21)
  ) {
    minutess = "минут";
  } else if (minutVal === 1) {
    minutess = "минута";
  } else if (minutVal > 1 && minutVal < 5 && (minuteS < 10 || minuteS > 20)) {
    minutess = "минуты";
  }

  if (
    secondVal === 0 ||
    (secondVal > 4 && secondVal < 10) ||
    (secondS > 9 && secondS < 21)
  ) {
    secondss = "секунд";
  } else if (secondVal === 1) {
    secondss = "секунда";
  } else if (secondVal > 1 && secondVal < 5 && (secondS < 10 || secondS > 20)) {
    secondss = "секунды";
  }

  day.textContent = `Сегодня ${days[date.getDay() - 1]}, ${date.getDate()} ${
    month[date.getMonth()]
  } ${date.getFullYear()} года, ${date.getHours()} ${hours} ${date.getMinutes()} ${minutess} ${date.getSeconds()} ${secondss}`;

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
