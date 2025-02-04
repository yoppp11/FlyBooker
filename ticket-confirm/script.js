import { flightSchedules } from "../data-tiket.js"

const urlParam = new URLSearchParams(window.location.search)
const flightNumberId = urlParam.get('flightNumber')
const userData = JSON.parse(localStorage.getItem('user'))
const uid = userData.uid
const userName = userData.username
const ticketConfirm = document.querySelector('.ticket-confirm')
const nama = document.querySelector('#user-name')

if(userName) nama.innerHTML = userName

let hasResult = false
let objFlight = {}

function createCardTicketConfirm(flight){
    const cardTicket = `
            <div class="ticket-detail">
            <div class="left">
            <h2 id="airline">${flight.airline}</h2>
            <p id="flight-number">${flight.flightNumber}</p>
            <p id="aircraft-type">${flight.aircraft}</p>
            </div>
            <div class="right">
            <p>${flight.date}</p>
            <p>${flight.originCity} (${flight.origin}) - ${flight.destinationCity} (${flight.destination})</p>
            </div>
        </div>
        <div class="ticket-schedule">
            <div class="left">
            <h2>Departure</h2>
            <h3 id="airpot-id">${flight.origin}</h3>
            <h3 id="airport-name">${flight.originAirport}</h3>
            <p id="airport-city">${flight.originCity}</p>
            <p id="time">${flight.departure}</p>
            </div>
            <div class="right">
            <h2>Arrival</h2>
            <h3 id="airpot-id">${flight.destination}</h3>
            <h3 id="airport-name">${flight.destinationAirport}</h3>
            <p id="airport-city">${flight.destinationCity}</p>
            <p id="time">${flight.arrival}</p>
            </div>
        </div>
        <div class="ticket-passenger">
            <div class="name">
            <h3>Name</h3>
            <p id="passenger-name">${userName}</p>
            </div>
            <div class="id">
            <h3>ID</h3>
            <p id="passenger-id">${uid}</p>
            </div>
            <div class="seat">
            <h3>Seat Number</h3>
            <p id="passenger-seat">13D</p>
            </div>
            <div class="ticket-id">
            <h3>Ticket ID</h3>
            <p id="passenger-ticket">${flight.IdTicket}</p>
            </div>
        </div>
        <button
            type="submit"
            id="confirm-btn"
        >
            CONFIRM
        </button>
    `;

    ticketConfirm.insertAdjacentHTML('beforeend', cardTicket)

}

flightSchedules.forEach(flight  => {
    if(flight.flightNumber === flightNumberId){
        
        createCardTicketConfirm(flight)
        hasResult = true
    }
})

const btnConfirm = document.querySelector('#confirm-btn')
const myTicketData = JSON.parse(localStorage.getItem('myTicket'))

btnConfirm.addEventListener('click', function(){
    let listTicket = []
    let objTicketData = {
        flightNumber: ''
    }
    if(!myTicketData){
        objTicketData.flightNumber = flightNumberId
        listTicket.push(objTicketData)
        localStorage.setItem('myTicket', JSON.stringify(listTicket))
    } else {
        objTicketData.flightNumber = flightNumberId
        myTicketData.push(objTicketData)
        localStorage.setItem('myTicket', JSON.stringify(myTicketData))

    }
    // localStorage.setItem('myTicket', )
    window.location.href = `../my-tickets/index.html?flightNumber=${flightNumberId}`
})

if (!hasResult) {
    ticketConfirm.innerHTML = `
<div class="no-results">
  <h2>Penerbangan tidak ditemukan</h2>
  <p>Coba cari dengan kriteria yang berbeda</p>
</div>
`;
}






