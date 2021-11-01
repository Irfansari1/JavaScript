//smallerDisplay SD
//biggerDisplay BD

const BD = document.querySelector('.current-display');
const SD = document.querySelector('.previous-display');
const buttonsContainer = document.querySelector('.buttons-container');

buttonsContainer.addEventListener('click', e => {
    // numbers
    if (e.target.classList.contains('number') && BD.innerText.length < 8) {
      if ((BD.innerText == '' && e.target.classList.contains('num0')) || BD.innerText.split('')[0] == 0) {
        BD.innerText = e.target.innerText;
      } else {
        BD.innerText += e.target.innerText;
      }
    }
  // decimal
  if (e.target.classList.contains('decimal') && !BD.innerText.includes(',')) {
    BD.innerText += e.target.innerText;
  }

  // operands
  if (e.target.classList.contains('operator')) {
    const operator = e.target.innerText;
    switch (operator) {
      case '+':
        if (BD.innerText !== '') {
          SD.innerText = `${BD.innerText} ${operator}`;
          BD.innerText = '';
        }
        break;
      case '-':
        if (BD.innerText !== '') {
            SD.innerText = `${BD.innerText} ${operator}`;
          BD.innerText = '';
        }
        break;
      case 'x':
        if (BD.innerText !== '') {
            SD.innerText = `${BD.innerText} ${operator}`;
          BD.innerText = '';
        }
        break;
      case '÷':
        if (BD.innerText !== '') {
            SD.innerText = `${BD.innerText} ${operator}`;
          BD.innerText = '';
        }
        break;
      case '=':
        if (BD.innerText !== '') {
          if (SD.innerText.includes('+')) {
            const currentNumber = Number(BD.innerText);
            const previousNumber = Number(SD.innerText.split(' ')[0]);
            BD.innerText = currentNumber + previousNumber;
            SD.innerText = '';
          }
          if (SD.innerText.includes('-')) {
            const currentNumber = Number(BD.innerText);
            const previousNumber = Number(SD.innerText.split(' ')[0]);
            BD.innerText = previousNumber - currentNumber;
            SD.innerText = '';
          }
          if (SD.innerText.includes('÷')) {
            const currentNumber = Number(BD.innerText);
            const previousNumber = Number(SD.innerText.split(' ')[0]);
            if (currentNumber === 0) {
                BD.innerText = 'Error';
            } else {
                BD.innerText = previousNumber / currentNumber;
            }
            SD.innerText = '';
          }
          if (SD.innerText.includes('x')) {
            const currentNumber = Number(BD.innerText);
            const previousNumber = Number(SD.innerText.split(' ')[0]);
            BD.innerText = previousNumber * currentNumber;
            SD.innerText = '';
          }
        }
        break;

      default:
        break;
    }
  }
  // functions
  if (e.target.classList.contains('function')) {
    const func = e.target.innerText;
    switch (func) {
      case 'AC':
        //!dont use here innerText or textContent
        BD.innerText = '';
        SD.innerText = '';
        break;
      case '±':
        if (!BD.innerText.includes('-')) {
            BD.prepend('-');
        } else {
            BD.innerText = BD.innerText.split('-')[1];
        }
        break;
      case '←':
        // if (BD.innerText !== '') {
        //   BD.innerText = Number(BD.innerText) / 100;
        // }
        BD.innerText = BD.innerText.substring(0, BD.innerText.length - 1);
      default:
        break;
    }
  }
});