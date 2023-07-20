let result = document.getElementById('result');

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

function performBackButton() {
    if (result.value.length > 0) {
        let lastIndex = result.value.length-1;
        result.value = setCharAt(result.value,lastIndex,'');
    }
}

function addDot () {
    if (result.value.length > 0) {
        let lastIndex = result.value.length-1;
        if (result.value.charAt(lastIndex) === '+' || result.value.charAt(lastIndex) === '-') {
            result.value += '0.';
        } else if (result.value.charAt(lastIndex) !== '.') {
            result.value += '.';
        }
    } else {
        result.value = '0.'
    }
}

function addNumber(number) {
  result.value += number;
}

function addOperator(operator) {
    if (operator === '+/-') {
        let lastIndex = result.value.length-1;
        if (result.value.charAt(lastIndex) === '-') {
            result.value = setCharAt(result.value,lastIndex,'');
        } else {
            result.value += '-';
        }
    } else {
        result.value += operator;
    }
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}

function performSquare() {
    try {
        calculate();
        result.value = Math.pow(result.value, 2);
    } catch (error) {
        result.value = 'Error';
    }
}

function performSquareRoot() {
    try {
        calculate();
        result.value = Math.sqrt(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function performInverse() {
    try {
        calculate();
        result.value = Math.pow(result.value, -1);
    } catch (error) {
        result.value = 'Error';
    }
}

function clearResult() {
  result.value = '';
}
