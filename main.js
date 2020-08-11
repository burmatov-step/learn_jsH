'use strict'
// Первое задание
let ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


let lang = prompt('Выберите язык, "ru" или "en"', 'ru');
// Через IF
if(lang === 'ru'){
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang === 'en'){
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}
// Через switch
switch (lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
    default:
        console.log('Выберите язык')
        break;
}
// Через тернарный оператор и многомерный массив

let object = {
    'ru' : ru,
    'en' : en,
}

console.log(object[lang]);


// Второе задание
let namePerson = 'Степан';

namePerson === 'Артем' ? console.log('Директор') :
namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Ученик');


