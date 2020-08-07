let num = 266219;
let numStr = num.toString();
let numPr = 1
for(let i = 0; i< numStr.length; i++){
    numPr *= Number(numStr[i])
}
let three = numPr ** 3;

console.log(Number(three.toString().substring(0,2)))