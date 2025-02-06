import { flightSchedules } from '../data-tiket.js';
const userName = document.getElementById('user-name');
const userData = JSON.parse(localStorage.getItem('user'));
const btnSearch = document.getElementById('btn-cari-jadwal');
const kotaAsal = document.getElementById('kota-asal')
const kotaTujuan = document.getElementById('kota-tujuan')
const asalUser = document.getElementById('asal');
const tujuanUser = document.getElementById('tujuan');
const tanggalBerangkat = document.getElementById('tanggal');

if (userData.username) userName.innerHTML = userData.username;

function createOptionDropbox(flight){

    const optionDropbox = `
    <option value="${flight.destinationCity}">${flight.destinationCity}</option>
    `
    kotaTujuan.insertAdjacentHTML('beforeend', optionDropbox)
}

kotaAsal.addEventListener('change', function(event){
    kotaTujuan.innerHTML = ''

    let valueKotaAsal = event.target.value

    flightSchedules.forEach(flight => {
        if(flight.originCity === valueKotaAsal){
            createOptionDropbox(flight)
        }
    });

    valueKotaAsal = ''
})

function searchTicket() {
  const asal = kotaAsal.value;
  const tujuan = kotaTujuan.value;
  const tanggal = tanggalBerangkat.value;

  console.log(asal);
  console.log(tujuan);

  if (asal && tujuan && tanggal) window.location.href = `../ticket-search/index.html?asal=${asal}&tujuan=${tujuan}&tanggal=${tanggal}`;
  else window.location.href = `../ticket-search/index.html?asal=${asal}&tujuan=${tujuan}`
  
}

btnSearch.addEventListener('click', searchTicket);
