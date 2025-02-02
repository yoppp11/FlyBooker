
const urlParam = new URLSearchParams(window.location.search)

const asal = urlParam.get('asal')
const tujuan = urlParam.get('tujuan')
const tanggal = urlParam.get('tanggal')

console.log(asal, tujuan, tanggal)
