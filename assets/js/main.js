
const button = document.querySelector('#invia');
let userName;
let km;
let userAge;

button.addEventListener('click', function () {
    userName = document.querySelector('#name').value;
    km = document.querySelector('#km').value;
    userAge = document.querySelector('.form-select').value;
    let prezzoTicket = km * 0.21;
    if (userAge == 1) {
        prezzoTicket -= prezzoTicket * 20 / 100;
    } else if (userAge == 3) {
        prezzoTicket -= prezzoTicket * 40 / 100;
    }

    console.log(prezzoTicket)

});






