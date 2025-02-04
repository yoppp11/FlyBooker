const userName = document.getElementById('user-name');
const userData = JSON.parse(localStorage.getItem('user'));
const btnSearch = document.getElementById('btn-cari-jadwal');
const asalUser = document.getElementById('asal');
const tujuanUser = document.getElementById('tujuan');
const tanggalBerangkat = document.getElementById('tanggal');

if (userData.username) userName.innerHTML = userData.username;

function searchTicket() {
  const asal = asalUser.value;
  const tujuan = tujuanUser.value;
  const tanggal = tanggalBerangkat.value;

  if (asal && tujuan && tanggal) window.location.href = `../ticket-search/index.html?asal=${asal}&tujuan=${tujuan}&tanggal=${tanggal}`;
}

btnSearch.addEventListener('click', searchTicket);
