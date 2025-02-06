// const flightSchedules = require('../data-tiket.js')
import { flightSchedules } from '../data-tiket.js';

document.addEventListener('DOMContentLoaded', () => {
  let namaUser = document.getElementById('user-name');
  const userData = JSON.parse(localStorage.getItem('user'));
  const userName = userData.username;

  if (userData.username) namaUser.innerHTML = userName;
});

const urlParam = new URLSearchParams(window.location.search);

const asalParam = urlParam.get('asal');
const tujuanParam = urlParam.get('tujuan');
const tanggalParam = urlParam.get('tanggal');
const wrapper = document.querySelector('.wrapper');
const originCity = document.getElementById('origin-city');
const destinationCity = document.getElementById('destination-city');
const flightDate = document.getElementById('date-flight');
let tiketId = '';

originCity.textContent = asalParam;
destinationCity.textContent = tujuanParam;
flightDate.textContent = tanggalParam;

const splitTanggal = tanggalParam.split('-');

let tanggal = '';

for (let i = splitTanggal.length - 1; i >= 0; i--) {
  if (i === 0) {
    tanggal += `${splitTanggal[i]}`;
  } else {
    tanggal += `${splitTanggal[i]}/`;
  }
}
console.log(tanggal);

function createSearchCard(flight) {
  const searchCard = `
    <div class="search-card">
      <div class="flight-information">
        <div id="flight-airline">${flight.airline}</div>
        <div id="flight-number">${flight.flightNumber}</div>
        <div id="flight-aircraft">${flight.aircraft}</div>
        <div id="flight-date">${flight.date}</div>
      </div>
      <div class="origin">
        <h2 id="origin-airport-code">${flight.origin}</h2>
        <h3 id="origin-airport">${flight.originAirport}</h3>
        <p id="origin-city">${flight.originCity}</p>
        <p id="origin-time">${flight.departure}</p>
      </div>
      <div class="arrow">
        <img src="arrow.svg" alt="arrow-sign">
      </div>
      <div class="destination">
        <h2 id="destination-airport-code">${flight.destination}</h2>
        <h3 id="destination-airport">${flight.destinationAirport}</h3>
        <p id="destination-city">${flight.destinationCity}</p>
        <p id="destination-time">${flight.arrival}</p>
      </div>
    </div>
  `;

  wrapper.insertAdjacentHTML('beforeend', searchCard);
}
let hasResult = false;

flightSchedules.forEach((flight) => {
  const kotaAsal = flight.originCity;
  const kotaTujuan = flight.destinationCity;
  const tanggalBerangkat = flight.date;

  if (asalParam === kotaAsal && tujuanParam === kotaTujuan && tanggal === tanggalBerangkat) {
    createSearchCard(flight);
    hasResult = true;
  }
});

if (!hasResult) {
  wrapper.innerHTML = `
<div class="no-results">
  <h2>Penerbangan tidak ditemukan</h2>
  <p>Coba cari dengan kriteria yang berbeda</p>
</div>
`;
}

const listTicketColumn = document.getElementsByClassName('search-card');

for (let i = 0; i < listTicketColumn.length; i++) {
  listTicketColumn[i].addEventListener('click', function () {
    const flightNumberId = listTicketColumn[i].querySelector('#flight-number').textContent;
    console.log(flightNumberId);
    window.location.href = `../ticket-confirm/index.html?flightNumber=${flightNumberId}`;
  });
}

console.log(listTicketColumn);
