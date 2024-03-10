const screen = document.querySelector(".screen-inner");

let buffer = "";
let runningTotal = 0;
let previousOperator;

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleOperator(value);
  } else {
    handleNumber(value);
  }
  rerender();
}

function handleNumber(number) {
  if (buffer === "0") {
    buffer = number;
  } else {
    buffer += number;
  }
}

function handleMath(operator) {
  if (buffer === "0") {
    // Do nothing already 0
    return;
  }

  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = operator;
  buffer = "0";
}

function flushOperation(intBuffer) {
  switch (previousOperator) {
    case "+":
      runningTotal += intBuffer;
      break;
    case "-":
      runningTotal -= intBuffer;
      break;
    case "x":
      runningTotal *= intBuffer;
      break;
    case "÷":
      runningTotal /= intBuffer;
      break;
    default:
      console.error("Error - hit default case in flushOperation");
      break;
  }
}

function handleOperator(operator) {
  switch (operator) {
    case "Clear":
      buffer = "0";
      runningTotal = 0;
      previousOperator = null;
      rerender();
      break;
    case "=":
      if (previousOperator === null) {
        // need two numbers to do math
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = "" + runningTotal;
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
      handleMath(operator);
      break;
    case "-":
      handleMath(operator);
      break;
    case "x":
      handleMath(operator);
      break;
    case "÷":
      handleMath(operator);
      break;
    default:
      console.error("Error - hit default case in handleOperator");
      break;
  }
}

function rerender() {
  screen.innerText = buffer;
}

function init() {
  document.querySelector(".components").addEventListener("click", (event) => {
    buttonClick(event.target.innerText);
  });
}
init();
