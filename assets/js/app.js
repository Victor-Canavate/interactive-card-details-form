let form = document.getElementById('form');

let formSection = document.querySelectorAll('.form-section');
let allInputs = document.querySelectorAll('.input')

let formElementExpdate = document.querySelector('.form-element--expdate')
let expdateLabel = document.querySelector('.expdate-label')
let expdateInputs = document.querySelectorAll('.expdate-input')
let expdateMmSpan = document.querySelector('.card-date--mm');
let expdateYySpan = document.querySelector('.card-date--yy');
let expdateSpanArray = [expdateMmSpan, expdateYySpan]
let errorMessageExpDate = document.querySelector('.error-message--expdate');
let errorFormatExpdate = document.querySelector('.error-format--expdate')

let errorMessages = document.querySelectorAll('.error-message');

let cardNumber = document.querySelector('.front-card--number')
let cardOwner = document.querySelector('.front-card--owner')
let cardCvc = document.querySelector('.back-card--cvc')

let cardDate = document.getElementById('card-date')

let spanArray = [cardNumber, cardOwner, cardCvc]


console.log(spanArray);
console.log(formSection);

let emptyField = ''
let formatErrorField = ''
let falso = false
let verdadeiro = true

function emptyFieldVerify() {
    for(i = 0; i < formSection.length; i++) {
        if(formSection[i].children[1].value == '') {
            formSection[i].children[2].style.display = 'flex'
            formSection[i].children[1].style.border = errorColor

        } else {
            formSection[i].children[2].style.display = 'none'
            formatVerify(formSection[i].children[1], formSection[i].children[1].value,  findRegex(formSection[i]), formSection[i].children[3])
        }
    }

    for(i = 0; i < expdateInputs.length; i++) {
        if(expdateInputs[i].value == '') {
            errorMessageExpDate.style.display = 'flex';
            expdateInputs[i].style.border = errorColor
        } else {
            errorMessageExpDate.style.display = 'none';
            formatVerify(expdateInputs[i], expdateInputs[i].value, findRegex(formElementExpdate), errorFormatExpdate)
        }
    }

}

function findRegex(formSection) {
    if(formSection.children[0].textContent == 'cardholder name') {
        return numbersRegex
    }

    if(formSection.children[0].textContent == 'card number') {
        return lettersRegex
    }

    if(formSection.children[0].textContent == 'cvc') {
        return lettersRegex
    }

    if(formSection.children[0].textContent == 'exp. date (mm/yy)') {
        return lettersRegex
    }
}

let numbersRegex = /\d+/g
let lettersRegex = /^[A-Za-z]+$/

let errorColor = '1px solid #ff5252'
let normalColor = '1px solid hsl(270, 3%, 87%)'


function formatVerify(input, value, regex, errorFormat) {
    if(value.match(regex)) {
        errorFormat.style.display = 'flex'
        input.style.border = errorColor;
        formatErrorField = true
        emptyField = false
    } else {
        errorFormat.style.display = 'none'
        input.style.border = normalColor
        formatErrorField = false 
    }
}

function cardDataUpdate (inputs, spans, inputsExpdate , spansExpdate) {
    for(i = 0; i < inputs.length; i++) {
        if(inputs[i].children[1].value == '') {
            return
        } else {
            for(p = 0; p < spans.length; p++) {
                if(inputs[i].children[1].classList[1] == spans[p].classList[1]) {
                    spans[p].textContent = inputs[i].children[1].value
                }
            }
            
        }
    }
}

function cardDataUpdateExpdate (inputs, spans) {
    for(i = 0; i < inputs.length; i++) {
        if(inputs[i].value == '') {
            return
        } else {
            spans.forEach((span) => {
                if(span.classList[0] == inputs[i].classList[1]) {
                    span.textContent = inputs[i].value
                }
            })
        }
    }
}

let registerSection = document.querySelector('.register')
let successfulRegisterSection = document.querySelector('.register-success')

function successfulDisplay () {
    registerSection.style.display = 'none'
    successfulRegisterSection.style.display = 'flex'
}
 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    emptyFieldVerify();

    for(i = 0; i < allInputs.length; i++) {
        if(allInputs[i].value == '') {
            return
        } else {
            if(emptyField != verdadeiro && formatErrorField != verdadeiro) {
                cardDataUpdate(formSection, spanArray)
                cardDataUpdateExpdate(expdateInputs, expdateSpanArray)
                successfulDisplay()
            } else {
                return
            }
        }
    }
})