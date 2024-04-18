function Validator(options) {
    var formElement = document.querySelector(options.form)
    if(formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault()
            var isValid = true;
            options.rules.forEach((rule) => {
                var inputElement = formElement.querySelector(rule.selector)
                var errorElement = inputElement.parentElement.querySelector('.form-message')
                if(inputElement) {
                    var errorMessage = rule.test(inputElement.value)
                    if(!errorMessage) {
                        errorElement.innerHTML = rule.mess
                        inputElement.classList.toggle('err')
                        isValid = false
                    } else {
                        errorElement.innerHTML = ''
                    }
                }
            })
            if(isValid)
            {
                formElement.submit()
            }
        }

        options.rules.forEach((rule) => {
            var inputElement = formElement.querySelector(rule.selector)
            var errorElement = inputElement.parentElement.querySelector('.form-message')
            if(inputElement) {
                inputElement.onblur = function() {
                    var errorMessage = rule.test(inputElement.value)
                    if(!errorMessage) {
                        errorElement.innerHTML = rule.mess
                    } else {
                        errorElement.innerHTML = ''
                    }
                }
            }
        })
    }
}

Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim()
        },
        mess: message
    }
}