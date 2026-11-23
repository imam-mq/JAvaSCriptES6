const daya = Number(process.argv[2]);
const pemakaian = Number(process.argv[3]);
const hariTerlambat = Number(process.argv[4] ?? 0);
const metode = process.argv[5] ?? "Tunai";
let tarifPerKwh;
switch (daya) {
    case 900:
        tarifPerKwh = 1352;
        break;
    case 1300:
    case 2200:
        tarifPerKwh = 1444.70;
        break;
    case 3500:
    case 5500:
        tarifPerKwh = 1699.53;
        break;
    default:
        tarifPerKwh = 0;
}

if (tarifPerKwh === 0) {
    console.log(`DAYA: ${daya} VA TIDAK TERDAFTAR`);
} else {
    const tagihan = Math.round(pemakaian * tarifPerKwh);
    const dapatDiskon = daya === 900 && pemakaian < 100;
    const diskon = dapatDiskon ? Math.round(tagihan * 0.2) : 0;

    let denda;
    if (hariTerlambat === 0) {
        denda = 0;
    } else if (hariTerlambat <= 7){
        denda = 3000;
    } else {
        denda = 10000;
    }
    
    const terlambat = hariTerlambat > 0;
    const status = !terlambat ? "Tepat Waktu" : `Terlambat ${hariTerlambat} hari`;
    const perluSurvei = pemakaian === 0 || pemakaian > 1000;

    const total = tagihan - diskon + denda;

    console.log(`Tagihan : Rp${tagihan.toLocaleString("id-ID")}`);
    console.log(`Diskon  : Rp${diskon.toLocaleString("id-ID")}`);
    console.log(`Denda   : Rp${denda.toLocaleString("id-ID")}`);
    console.log(`TOTAL   : Rp${total.toLocaleString("id-ID")}`);
    console.log(`Status  : ${status} | Metode: ${metode} | Survei: ${perluSurvei ? "YA" : "tidak"}`);
}



console.log("Cek Tarif :", tarifPerKwh);
