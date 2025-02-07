import { flightSchedules } from "../data-tiket.js";

const myListTicket = JSON.parse(localStorage.getItem('myTicket'))
const myTicket = document.querySelector('#my-tickets')
const userData = JSON.parse(localStorage.getItem('user'))
const userName = userData.username
const nama = document.querySelector('#user-name')

if(userName) nama.innerHTML = userName

function createListCard (flight){
    const card = `
    <div class="card">
        <div class="ticket-detail-l">
          <div class="flight-info">
            <h2 id="airline-name">${flight.airline}</h2>
            <p id="flight-number">${flight.flightNumber}</p>
          </div>
          <div class="departure">
            <h4 id="departure-airport">${flight.originCity} (${flight.origin})</h4>
            <p id="departure-time">${flight.departure}</p>
          </div>
        </div>
        <div class="ticket-detail-r">
          <div class="wrapper">
            <div class="ticket-details">
              <p id="ticket-date">${flight.date}</p>
              <h4 id="ticket-id">${flight.IdTicket}</h4>
            </div>
            <div class="arrival">
              <h4 id="departure-airport">${flight.destinationCity} (${flight.destination})</h4>
              <p id="departure-time">${flight.arrival}</p>
            </div>
          </div>
          <div class="interact">
            <img
              src="./edit.png"
              alt="edit-button"
              id="edit-button"
            />
            <img
              src="./trash.png"
              alt="delete-button"
              id="delete-button"
            />
          </div>
        </div>
      </div>
    `;

    myTicket.insertAdjacentHTML('beforeend', card)
}

let hasResult = false

myListTicket.forEach(flightNumber => {

    const id = flightNumber.flightNumber

    flightSchedules.forEach(flight => {

        if(id === flight.flightNumber){
            createListCard(flight)
            hasResult = true
        }
    })
});

if(!hasResult) {
    myTicket.innerHTML = 'Belum ada data'
}

const listCard = document.getElementsByClassName('card')

for(let i = 0; i < listCard.length; i++){
    const btnDelete = listCard[i].querySelector('#delete-button')
    btnDelete.addEventListener('click', function(){
        event.stopPropagation()

        console.log('ini diklikkk')
        myListTicket.splice([i], 1)
        localStorage.setItem('myTicket', JSON.stringify(myListTicket))
        location.reload()
    })
    listCard[i].addEventListener('click', function(){
        const flightNumberId = listCard[i].querySelector('#flight-number').textContent
        console.log(flightNumberId)
        window.location.href = `../ticket-preview/index.html?flightNumber=${flightNumberId}`
    })
}