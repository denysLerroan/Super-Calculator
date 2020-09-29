var globalCalculations = [
  {
    id: 1,
    description: 'Soma (a + b):',
    calculationFunction: function sum(a, b) {
      return a + b;
    },
    type: 'a_b',
  },

  {
    id: 2,
    description: 'Subtração (a - b):',
    calculationFunction: function subtract(a, b) {
      return a - b;
    },
    type: 'a_b',
  },
];

var globalInputA = document.querySelector('#inputA');
var globalInputB = document.querySelector('#inputB');

console.log(globalInputA);
console.log(globalInputB);

function start() {
  globalInputA.addEventListener('input', handleChangeInputA);
  globalInputB.addEventListener('input', handleChangeInputB);

  calculate();
}

function handleChangeInputA(a) {
  calculate();
}
function handleChangeInputB(b) {
  calculate();
}

function getCalculationFrom(type, calculationFunction, a, b) {
  var value = '';

  switch (type) {
    case 'a':
      value = calculationFunction(a);
      break;

    case 'b':
      value = calculationFunction(b);
      break;

    case 'a_b':
      value = calculationFunction(a, b);
      break;

    case 'b_a':
      value = calculationFunction(b, a);
      break;

    default:
      value = 'O tipo de cálculo não foi identificado.';
  }

  return value;
}

function calculate() {
  var divCalculations = document.querySelector('#calculations');

  var innerCalculations = document.createElement('div');
  innerCalculations.classList.add('row');

  var a = parseInt(globalInputA.value, 10);
  var b = parseInt(globalInputB.value, 10);

  for (var i = 0; i < globalCalculations.length; i++) {
    var currentCalculation = globalCalculations[i];

    var type = currentCalculation.type;
    var calculationFunction = currentCalculation.calculationFunction;

    var id = 'input_' + currentCalculation.id;

    var value = getCalculationFrom(type, calculationFunction, a, b);

    var div = getMaterializeDiv();
    var input = getMaterializeInput(id, value);
    var label = getMaterializeLabel(id, currentCalculation.description);

    div.appendChild(input);
    div.appendChild(label);
    innerCalculations.appendChild(div);
  }
  divCalculations.innerHTML = '';
  divCalculations.appendChild(innerCalculations);
}

function getMaterializeDiv() {
  var div = document.createElement('div');
  div.classList.add('input-field', 'col', 's12', 'm6', 'l4');

  return div;
}

function getMaterializeInput(id, value) {
  var input = document.createElement('input');
  input.readOnly = true;
  input.type = 'text';
  input.id = id;
  input.value = value;

  return input;
}

function getMaterializeLabel(id, description) {
  var label = document.createElement('label');
  label.for = id;
  label.textContent = description;
  label.classList.add('active');

  return label;
}

start();
