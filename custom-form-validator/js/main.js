//import FormValidator from './FormValidator';
//const MyClass = require('./myClass');
const fv = new FormValidator("#signup");
alert("teste 0");

function validateLength(value, inputField) {
    if (value.length === 0 || value.length > 5) {
        return {
            pass: false,
            error: "Username must be between 1 - 5 characters."
        };
    }

    return {
        pass: true
    };
}

fv.register("#username", validateLength);

window.fv = fv;
console.log(window.fv);
