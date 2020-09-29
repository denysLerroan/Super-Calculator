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

function getCalculationFrom(data_type, calculationFunction, a, b) {
  var value = '';

  switch (data_type) {
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
  var a = parseInt(globalInputA.value, 10);
  var b = parseInt(globalInputB.value, 10);

  for (var i = 0; i < globalCalculations.length; i++) {
    var currentCalculation = globalCalculations[i];

    var data_type = currentCalculation.type;
    var calculationFunction = currentCalculation.calculationFunction;

    var value = getCalculationFrom(data_type, calculationFunction, a, b);
    console.log(value);
  }
}

start();
