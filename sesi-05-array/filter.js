const daftarPelanggan = [
    { id: "532110012345", nama: "Imam Mubaraq", daya: 1300, pemakaian: 253 },
    { id: "532110067890", nama: "Desiska Awliya", daya: 900, pemakaian: 80 },
    { id: "532110099999", nama: "Mubaraq Imam", daya: 2200, pemakaian: 1200 },
    { id: "532110055555", nama: "Awlia Zahwa", daya: 1300, pemakaian: 180 },
];

const pelangganBoros = daftarPelanggan.filter((pelanggan) => pelanggan.pemakaian > 200);
const pelanggan1300 = daftarPelanggan.filter((pelanggan) => pelanggan.daya === 1300);
const pelangganHemat = daftarPelanggan.filter((pelanggan) => pelanggan.pemakaian < 100);
const namaBoros = daftarPelanggan.filter((pelanggan) => pelanggan.pemakaian > 200).map((pelanggan)=> pelanggan.nama);
const namaHemat = pelangganHemat.map((pelanggan) => pelanggan.nama);

console.log("Boros :", pelangganBoros);
console.log("1300  :", pelanggan1300);
console.log("Hemat :", pelangganHemat);
console.log("Nama boros :", namaBoros);
console.log("Nama Hemat :", namaHemat);