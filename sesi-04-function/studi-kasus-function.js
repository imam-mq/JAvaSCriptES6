// tarif dari daya 
const tentukanTarif = (daya) => {
    switch (daya) {
        case 900:
            return 1352;
        case 1300:
        case 2200:
            return 1444.70;
        case 3500:
        case 5500:
            return 1699.53;
        default:
            return 0;
    }
};

const hitungTagihan = (pemakaian, tarif) => Math.round(pemakaian * tarif);
const hitungDiskon = (daya, pemakaian, tagihan) => daya === 900 && pemakaian < 100 ? Math.round(tagihan * 0.2) : 0;

const hitungDenda = (hariTerlambat) => {
    let denda;

    if (hariTerlambat === 0) {
        denda = 0;
    } else if (hariTerlambat <= 7) {
        denda = 3000;
    } else {
        denda = 10000;
    }
    return denda;
};

const daya = Number(process.argv[2]);
const pemakaian = Number(process.argv[3]);
const hariTerlambat = Number(process.argv[4] ?? 0);
const metode = process.argv[5] ?? "Tunai";

const tarif = tentukanTarif(daya);

if (tarif === 0) {
    console.log(`Daya ${daya} VA tidak terdaftar.`);
} else {
    const tagihan = hitungTagihan(pemakaian, tarif);
    const diskon = hitungDiskon(daya, pemakaian, tagihan);
    const denda = hitungDenda(hariTerlambat);
    const total = tagihan - diskon + denda;

    console.log(`Tagihan : Rp${tagihan.toLocaleString("id-ID")}`);
    console.log(`Diskon  : Rp${diskon.toLocaleString("id-ID")}`);
    console.log(`Denda   : Rp${denda.toLocaleString("id-ID")}`);
    console.log(`TOTAL   : Rp${total.toLocaleString("id-ID")}`);
}


