
const button = document.getElementById('invia');
const buttonDelete = document.getElementById('cancella')
let userName;
let km;
let userAge;

button.addEventListener('click', function () {
    const card =document.querySelector('main');
    card.style.display = 'block';
    button.disabled = 'true';

    userName = document.querySelector('#name').value;

    km = document.querySelector('#km').value;

    userAge = document.querySelector('.form-select').value;

    let prezzoTicket = km * 0.21;
    if (userAge == 1) {
        prezzoTicket -= prezzoTicket * 20 / 100;
    } else if (userAge == 3) {
        prezzoTicket -= prezzoTicket * 40 / 100;
    }
    const nomePasseggero =document.querySelector('.nome_passeggero');
    nomePasseggero.innerHTML = userName;

    let offerta =document.querySelector('.offerta');
    if (userAge==1){
        offerta.innerHTML = 'Sconto Minorenne';
    }else if(userAge==3){
        offerta.innerHTML = 'Sconto over 65';
    }else{
        offerta.innerHTML = 'Biglietto Intero';
    }

    document.querySelector('.carrozza').innerHTML =Math.floor(Math.random()*10)+1;

    document.querySelector('.codice').innerHTML =Math.floor(Math.random()*100000)+1;


    const costo =document.querySelector('.costo');
    costo.innerHTML =  `${prezzoTicket.toFixed(2)}€`;


    if (isNaN(km) || km<=0){
        alert('hai inserito un valore errato.')
        document.querySelector('.my_hidden_card').innerHTML = `Ops! c'è stato un errore, riprovare.`; 
    } 


});

buttonDelete.addEventListener('click', function(){
    // const card =document.querySelector('main');
    // card.style.display = 'none';  
    // userName ='';
    // document.querySelector('#name').value ='';
    // userAge = 1;
    // document.querySelector('.form-select').value =1;
    // km =0;
    // document.querySelector('#km').value ='';
    window.location.reload();
});






