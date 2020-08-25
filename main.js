"use strict";
const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.create = function () {
  let el;
  let inp = document.createElement("input");
  if(this.selector[0] === '.'){
   el =  document.createElement('div');

  } else if(this.selector[0] === '#'){
     el = document.createElement("p");
  } else{
    return
  }
  el.style.height = this.height + "px";
  el.style.width = this.width + "px";
  el.style.background = this.bg;
  el.style.fontSize = this.fontSize + "px";
  document.body.append(el);
  document.body.append(inp);
  inp.addEventListener('keyup', function () {
    el.textContent = inp.value
  })

};


const appData = new DomElement('#fff', 100, 200, 'blue', 20);

appData.create()