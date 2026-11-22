const namaPelanggan = "Budi Santoso";
const idPelanggan = "532110012345";
let meterAwal = 1200;
let meterAkhir = 1450;



console.log(namaPelanggan);
console.log(idPelanggan);
console.log("Meter Awal : ",meterAwal);
console.log("Meter Akhir : ", meterAkhir);

meterAwal = meterAkhir;
meterAkhir = 1703;

// idPelanggan = "532110012345";



console.log("--- Bulan Depan ---");
console.log("Meter Awal:", meterAwal);
console.log("Meter Akhir:", meterAkhir);

// tagihan bulan depan
const tarifPerKwh = 1444.70;
const pemakaian = meterAkhir - meterAwal;
const tagihan = pemakaian * tarifPerKwh;

const tagihanBulat = Math.round(tagihan);

const persenPPj = 0.03;
const PPJ = Math.round(tagihan * persenPPj);

const rataRataHarian = pemakaian / 30;


const biayaAdmin = 2500;
const totalBayar = tagihanBulat + PPJ + biayaAdmin;


const uangBayar = 400000;
const Kembalian = uangBayar - totalBayar;


console.log("--- Rincian Tagihan ---");
console.log("Pemakaian :", pemakaian, "kwh");
console.log(`Rata-rata : ${rataRataHarian.toFixed(1)} kWh/hari`);
console.log(`Tagihan : Rp${tagihanBulat.toLocaleString("id-ID")}`);
console.log(`PPJ (3%) : Rp${PPJ.toLocaleString("id-ID")}`);
console.log(`Biaya Admin : Rp${biayaAdmin.toLocaleString("id-ID")}`);
console.log(`total Bayar: Rp${totalBayar.toLocaleString("id-ID")}`);
console.log(`Uang Bayar : Rp${uangBayar.toLocaleString("id-ID")}`);
console.log(`Uang Kembalian : Rp${Kembalian.toLocaleString("id-ID")}`);

const idCari = process.argv[2];
console.log("ID yang di cari", idCari);

const dataPelanggan = {
    "532110012345" : { nama: "Imam Mubaraq", daya: 1300, meterAwal: 1450, meterAkhir: 1703 },
    "532110067890" : { nama: "Mubaraq Imam", daya: 900, meterAwal: 3200, meterAkhir: 3380 },

};

const pelanggan = dataPelanggan[idCari];
if (idCari === undefined) {
    console.log("masukan id pelanggan")
} else if (pelanggan === undefined) {
    console.log(`ID pelanggan ${idCari} tidak ketemu`);
} else {
    console.log(`pelanggan : ${pelanggan.nama}`);
}





