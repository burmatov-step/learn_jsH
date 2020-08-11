'use strict'

function sss(str) {
  if(typeof str !== 'string'){
    alert('Введите строку');
    return
  } else if(str.length > 30){
    return str.trim().substring(0, 30) + '...'
  } else{
    return str.trim();
  }
}

