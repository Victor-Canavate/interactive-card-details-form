let form = document.getElementById('form');
let inputs = document.querySelectorAll('.form-element--input')
let errorMessages = document.querySelectorAll('.error-message');
let cardholderInput = document.querySelector('.cardholder-input');
let cardnumberInput = document.querySelector('.cardnumber-input');
let expdateInput = document.querySelectorAll('.expdate-input');
let errorMessageExpDate = document.querySelector('.error-message--expdate');
let emptyField = ''
let errorFormat = ''

function emptyFieldVerify() {
    for(i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            inputs[i].style.border = '1px solid #ff5252';
            errorMessages[i].style.display = 'flex'
            emptyField = true
        } else {
            inputs[i].style.border = '1px solid hsl(270, 3%, 87%)'
            errorMessages[i].style.display = 'none';
        }
    }

    for(i = 0; i < expdateInput.length; i++) {
        if(expdateInput[i].value == ''){
            expdateInput[i].style.border = '1px solid #ff5252';
            errorMessageExpDate.style.display = 'flex'
            emptyField = true
        } else {
            expdateInput[i].style.border = '1px solid hsl(270, 3%, 87%)';
            errorMessageExpDate.style.display = 'none'
        }
    }

}

let onlyNumbersRegex = /\d+/g
let onlyLettersRegex = /^[A-Za-z]+$/

let cardholderErrorFormat = document.querySelector('.error-format--cardholder')
let cardnumberErrorFormat = document.querySelector('.error-format--cardnumber')


function formatVerify() {
    if(cardholderInput.value.match(onlyNumbersRegex)) {
        cardholderErrorFormat.style.display = 'flex';
    } else {
        cardholderErrorFormat.style.display = 'none';
    }

    if(cardnumberInput.value.match(onlyLettersRegex)){
        cardnumberErrorFormat.style.display = 'flex'
    } else {
        cardnumberErrorFormat.style.display = 'none'
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    emptyFieldVerify();
    formatVerify();
})