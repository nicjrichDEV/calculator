const controls = document.querySelector(".calc-container");
const screen = document.querySelector(".screen");

let first = "";
let second = "";
let operator = "";

document.addEventListener("keydown", (e) => {
  potentialValues(e);
});

controls.addEventListener("click", (e) => {
  potentialValues(e);
});

function potentialValues(event) {
  let selection = event.target.value || event.key;

  switch (selection) {
    case "C":
      clear();
      break;
    case "Backspace":
      valueSlicer(operator);
      break;
    case "/":
      operator = "/";
      break;
    case "*":
      operator = "*";
      break;
    case "-":
      operator = "-";
      break;
    case "+":
      operator = "+";
      break;
    case "=" || "Enter":
      let result = clac(operator, first, second);
      display(result);
      break;
    case "7":
      valueSelector(operator, "7");
      break;
    case "8":
      valueSelector(operator, "8");
      break;
    case "9":
      valueSelector(operator, "9");
      break;
    case "4":
      valueSelector(operator, "4");
      break;
    case "5":
      valueSelector(operator, "5");
      break;
    case "6":
      valueSelector(operator, "6");
      break;
    case "1":
      valueSelector(operator, "1");
      break;
    case "2":
      valueSelector(operator, "2");
      break;
    case "3":
      valueSelector(operator, "3");
      break;
    case "0":
      valueSelector(operator, "0");
      break;
    default:
      console.log("Error");
  }
  console.log(operator);
}

/**
 * Determines if the value should be placed in first or second store. Then displays the value on the screen.
 * @param {String} op
 * @param {String} value
 */
function valueSelector(op, value) {
  if (op === "") {
    first += value;
    display(first);
  } else {
    second += value;
    display(second);
  }
}

/**
 * Determines if the value should be sliced from first or second store. Then displays the value on the screen.
 * @param {String} op
 */
function valueSlicer(op) {
  if (op === "") {
    first = first.slice(0, -1);
    display(first);
  } else {
    second = second.slice(0, -1);
    display(second);
  }
}

/**
 * Displays the value on the screen
 * @param {String} value
 */
function display(value) {
  screen.textContent = value;
}

/**
 *
 * @param {String} op
 * @param {String} a
 * @param {String} b
 * @returns {Number}
 */
function clac(op, a, b) {
  let value1 = parseInt(a);
  let value2 = parseInt(b);
  switch (op) {
    case "/":
      return value1 / value2;
    case "*":
      return value1 * value2;
    case "-":
      return value1 - value2;
    case "+":
      return value1 + value2;
    default:
      console.log("Error");
  }
}

/**
 * Clears the first, second and operator stores. Then displays 0 on the screen
 */
function clear() {
  first = "";
  second = "";
  operator = "";
  display(0);
}
