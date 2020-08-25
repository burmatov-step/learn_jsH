"use strict";

// const DomElement = function (selector, height, width, bg, fontSize) {
//   this.selector = selector;
//   this.height = height;
//   this.width = width;
//   this.bg = bg;
//   this.fontSize = fontSize;
// };

// DomElement.prototype.create = function () {
//   let el;
//   let inp = document.createElement("input");
//   if (this.selector[0] === ".") {
//     el = document.createElement("div");
//     el.classList.add(this.selector.substring(1));
//   } else if (this.selector[0] === "#") {
//     el = document.createElement("p");
//     el.id = this.selector.substring(1);
//   } else {
//     return;
//   }
//   el.style.height = this.height + "px";
//   el.style.width = this.width + "px";
//   el.style.background = this.bg;
//   el.style.fontSize = this.fontSize + "px";
//   document.body.append(el);
//   document.body.append(inp);
//   inp.addEventListener("keyup", function () {
//     el.textContent = inp.value;
//   });
// };

// const appData = new DomElement("#fff", 100, 200, "blue", 20);

// appData.create();





const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = 'absolute';
  this.el

};

DomElement.prototype.create = function () {
  // let el;
  let inp = document.createElement("input");
  if(this.selector[0] === '.'){
   this.el =  document.createElement('div');

  } else if(this.selector[0] === '#'){
     this.el = document.createElement("p");
  } else{
    return
  }
  this.el.style.height = this.height + "px";
  this.el.style.position = this.position;
  this.el.style.left = 0;
  this.el.style.top = 0;
  this.el.style.width = this.width + "px";
  this.el.style.background = this.bg;
  this.el.style.fontSize = this.fontSize + "px";
  document.body.append(this.el);
  document.body.append(inp);
  inp.style.marginTop = (this.height + 20) + 'px'
  let _this = this
  inp.addEventListener('keyup', function () {
    _this.el.textContent = inp.value;
  })



};

DomElement.prototype.keydwn = function () {
   const _this = this
  document.addEventListener("keydown", function (e) {
   if (e.code === "ArrowRight") {
     _this.el.style.left = parseFloat(_this.el.style.left) + 10 + "px";
   } else if (e.code === "ArrowLeft") {
     _this.el.style.left = parseFloat(_this.el.style.left) - 10 + "px";
   } else if (e.code === "ArrowDown") {
     _this.el.style.top = parseFloat(_this.el.style.top) + 10 + "px";
   } else if (e.code === "ArrowUp") {
     _this.el.style.top = parseFloat(_this.el.style.top) - 10 + "px";
   }


  });
};





document.addEventListener('DOMContentLoaded', function () {
  const appData = new DomElement(".fff", 100, 200, "blue", 20);
  appData.create();
  appData.keydwn();
})

