// const flightSchedules = require('../data-tiket.js')
import { flightSchedules } from '../data-tiket.js'

const urlParam = new URLSearchParams(window.location.search)

const asalParam = urlParam.get('asal')
const tujuanParam = urlParam.get('tujuan')
const tanggalParam = urlParam.get('tanggal')
const wrapper = document.querySelector('.wrapper')

const splitTanggal = tanggalParam.split('-')

let tanggal = ''

for(let i = splitTanggal.length - 1; i >= 0; i--){
    if(i === 0){
        tanggal += `${splitTanggal[i]}`
    } else {
        tanggal += `${splitTanggal[i]}/`
        
    }
}
console.log(tanggal)

function createSearchCard(flight){
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

  wrapper.insertAdjacentHTML('beforeend', searchCard)
}

flightSchedules.forEach(flight =>  {
    console.log(flight)
    const kotaAsal = flight.origin
    const kotaTujuan = flight.destination
    const tanggalBerangkat = flight.date

    if(asalParam === kotaAsal && tujuanParam === kotaTujuan && tanggal === tanggalBerangkat) {
        
        createSearchCard(flight)
        
    } else {

    }
})





