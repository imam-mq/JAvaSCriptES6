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

console.log(`Pemakaian : ${pemakaian} Kwh`);
console.log(`Tagihan : Rp${tagihanBulat.toLocaleString("id-ID")}`);
