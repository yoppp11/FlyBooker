import { flightSchedules } from '../data-tiket.js';

const urlParam = new URLSearchParams(window.location.search);
const flightNumberId = urlParam.get('flightNumber');
const dataUser = JSON.parse(localStorage.getItem('user'));
const userName = dataUser.username;
const uid = dataUser.uid;
const ticketPreview = document.querySelector('#ticket-preview');

console.log(flightNumberId);

function createCardTicketConfirm(flight) {
  const tickerConfirm = `
    <div class="section">
        <div class="flight-info-l">
          <h2 id="airline-name">${flight.airline}</h2>
          <h3 id="airline-number">${flight.flightNumber}</h3>
          <p id="airline-aircraft">${flight.aircraft}</p>
        </div>
        <div class="flight-info-r">
          <h1>BOARDING PASS</h1>
          <p id="trip">${flight.originCity} (${flight.origin}) - ${flight.destinationCity} (${flight.destination})</p>
          <p id="date">${flight.date}</p>
        </div>
      </div>
      <div class="section">
        <div class="passenger-info-l">
          <h4>Name</h4>
          <p id="passenger-name">${userName}</p>
        </div>
        <div class="passenger-info-r">
          <h4>ID</h4>
          <p id="passenger-id">${uid}</p>
        </div>
      </div>
      <div class="section">
        <div class="passenger-info-l">
          <h4>Seat Number</h4>
          <p id="passenger-seat">13D</p>
        </div>
        <div class="passenger-info-r">
          <h4>Ticket ID</h4>
          <p id="passenger-ticket">${flight.IdTicket}</p>
        </div>
      </div>
      <div class="section">
        <div class="passenger-info-l">
          <h4>Departure</h4>
          <p id="departure-airport">${flight.originAirport}</p>
          <p id="departure-time">${flight.departure}</p>
        </div>
        <div class="passenger-info-r">
          <h4>Arrival</h4>
          <p id="arrival-airport">${flight.destinationAirport}</p>
          <p id="arrival-time">${flight.arrival}</p>
        </div>
      </div>
      <div class="barcode">
        <h5>SCAN THIS ON BOARDING GATE</h5>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/368px-QR_Code_Example.svg.png?20111025115625"
          alt="ticket QR_Code"
        />
      </div>
    `;

  ticketPreview.insertAdjacentHTML('beforeend', tickerConfirm);
}

flightSchedules.forEach((flight) => {
  if (flight.flightNumber === flightNumberId) {
    createCardTicketConfirm(flight);
  }
});

const dialogCloseBtn = document.getElementById('close-dialog-btn');
const confirmDialog = document.getElementById('confirm-dialog');

function showHideDialog() {
  confirmDialog.style.display = 'block';

  setTimeout(() => {
    confirmDialog.classList.add('fade-out');
  }, 2000);

  setTimeout(() => {
    confirmDialog.style.display = 'none';
  }, 3000);
}

showHideDialog();

dialogCloseBtn.addEventListener('click', () => {
  confirmDialog.style.display = 'none';
});
