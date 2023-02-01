const form = document.querySelector('form');
const submitButton = document.querySelector('input[type=submit]');
const congratMsg = document.querySelector('#congrat-msg')

const email = document.querySelector('#email');
const countryField = document.querySelector('#country');
const zipField = document.querySelector('#zip');
const passField = document.querySelector('#password');
const passConfField = document.querySelector('#password-confirmation');

const emailErr = document.querySelector('.email.error')
const countryErr = document.querySelector('.country.error')
const zipErr = document.querySelector('.zip.error')
const passErr = document.querySelector('.password.error')
const passConfErr = document.querySelector('.password-confirmation.error')

submitButton.addEventListener('click', (event) => {
    if (!(form.checkValidity())) {
        checkEmail();
        checkCountry();
        checkZip();
        checkPassword();
        checkPassConf();
    } else {
        showCongratMsg();
        event.preventDefault();
    }
})

email.addEventListener("input", (event) => {
    checkEmail();
});

countryField.addEventListener("input", (event) => {
    checkCountry();
});

zipField.addEventListener("input", (event) => {
    checkZip();
});

passField.addEventListener("input", (event) => {
    checkPassword();
});

passConfField.addEventListener("input", (event) => {
    checkPassConf();
});

function showCongratMsg() {
    congratMsg.textContent = 'Congratulations! You successfully submitted the form!'
}

function checkEmail() {
    if (email.checkValidity()) {
        console.log('email passed')
    }

    if (email.validity.valueMissing) {
        console.log('DUUUUDE');
        email.setCustomValidity("You forgot your email address!");
        emailErr.textContent = 'Please add an email address';
    } else if (email.validity.typeMismatch) {    
        email.setCustomValidity("Format!");
        emailErr.textContent = 'Must adhere to format: asd@qwe.stg';
    } else {
        email.setCustomValidity("");
        emailErr.textContent = '';
    }
}

function checkCountry() {
    console.log('checkCountry')
    if (countryField.validity.valueMissing) {
        countryField.setCustomValidity("Please state your country of residence.");
        countryErr.textContent = 'Please enter your country';
    } else {
        country.setCustomValidity("");
        countryErr.textContent = '';
    }
}

function checkZip() {
    const constraint = new RegExp(/^\d{5}$/); 
    
    if (constraint.test(zipField.value)) {
        zipField.setCustomValidity('');
        zipErr.textContent = '';
    } else if (zipField.validity.valueMissing) {
        zipField.setCustomValidity('Your forgot to enter your ZIP code.');
        zipErr.textContent = 'Just enter five digits';
    } else {
        zipField.setCustomValidity('Wrong format.');
        zipErr.textContent = 'Five digits.';
    }
}

function checkPassword () {
    if (passField.validity.valueMissing) {
        passField.setCustomValidity("Don't forget to add a password!");
        passErr.textContent = 'What is your password?';
    } else if (passField.validity.tooShort) {
        console.log('password too short')
        passField.setCustomValidity("Password too short.");
        passErr.textContent = 'Min. 8 characters';
    } else {
        passField.setCustomValidity("");
        passErr.textContent = '';
    }
}


function checkPassConf() {
    if (passConfField.validity.valueMissing) {
        passConfField.setCustomValidity("Please confirm password.");
        passConfErr.textContent = 'Confirm password';
    } else if (passConfField.value !== passField.value) {
        passConfField.setCustomValidity("Passwords don't match.");
        passConfErr.textContent = 'Your passwords need to match';
    } else {
        passConfField.setCustomValidity("");
        passConfErr.textContent = '';
    }
}
