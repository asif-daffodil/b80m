let result = '';

function addToResult(value) {
  result += value;
  document.getElementById('result').value = result;
}

function calculateResult() {
  try {
    result = eval(result);
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function clearResult() {
  result = '';
  document.getElementById('result').value = '';
}
