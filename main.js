'use strict';

const display = document.getElementById( 'output' );
const operate = document.getElementById( 'operater' );

function set(nums) {
  if(display.textContent == 0) {
    display.textContent = nums.textContent;
  }else {
    display.textContent += nums.textContent;
  }
}

function operating(nums) {
  if(display.textContent.slice(-1) === "+"){
    display.textContent !== "+";
  }
}

function calc() {
  display.textContent = new Function("return " + display.textContent)();
}

function reset() {
  display.textContent = 0
}