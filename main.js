"use strict";
const wrapper = document.querySelector(".wrapper");
const color = document.querySelector(".color");
const change = document.getElementById("change");
const symbol = '0123456789ABCDEF';


wrapper.style.textAlign = 'center';
change.style.height = '30px';
change.style.width = "100px";


function gen () {
  let colorNum = "#";
  for(let i=0; i<6; i++){
   let ff = symbol.split("")[Math.floor(Math.random() * 15)];
    colorNum += ff;
  }
  document.body.style.background = `${colorNum}`;
  color.textContent = colorNum;
}



change.addEventListener('click', gen)

// console.log((document.body.style.background = "#9A0123"));