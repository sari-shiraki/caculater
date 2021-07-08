'use strict';

const display = document.getElementById("output");
const pushOperate = document.getElementsByClassName('operator');



function set(nums) {
  if(display.textContent == 0 ) {
    display.textContent = nums.textContent;
  }else{
    display.textContent += nums.textContent;
  }
}

function operate(mark) {
  if (display.textContent.slice(-1) === "+" ||
      display.textContent.slice(-1) === "-" ||
      display.textContent.slice(-1) === "*" ||
      display.textContent.slice(-1) === "/" ||
      display.textContent.slice(-1) === "."
      ) {
    const f = display.textContent.slice(0,-1)
    display.textContent = f + mark.textContent;
  }else{
    display.textContent += mark.textContent;
  }
}

function calc() {
  display.textContent = new Function("return " + display.textContent)();
}

function reset() {
  display.textContent = 0
}