let display = document.getElementById('display');
let history = document.getElementById('display2');
let numpad = document.getElementById('numpad');
let operator = '';
let operand1 = '';
let operand2 = '';

numpad.addEventListener('click', function(event) {
    let target = event.target;
    if (target.matches('.num')) {
      if (operator === '') {
        operand1 += target.innerText;
          display.value = operand1;
      } else {
        operand2 += target.innerText;
          display.value = operand1 + ' ' + operator + ' ' + operand2; // update display
          // history.value = operand1 + ' ' + operator + ' ' + operand2;// update history
      }
    } else if (target.matches('.operator')) {
      operator = target.innerText;
      display.value = operand1 + ' ' + operator;
    } else if (target.matches('#equals')) {
      history.value = operand1 + ' ' + operator + ' ' + operand2;
      operand1 = eval(operand1 + operator + operand2);
      display.value = operand1;
      
        
      operator = '';
      operand2 = '';
    } else if (target.matches('#clear')) {
      operator = '';
      operand1 = '';
      operand2 = '';
      display.value = '';
    }
  });