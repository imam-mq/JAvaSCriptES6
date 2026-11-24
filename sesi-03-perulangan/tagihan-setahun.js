const TARIF_PER_KWH = 1444.70;
let totalSetahun = 0;
let tagihanTertinggi = 0;
let bulanTertinggi = 0;
let jumlahBulanboros = 0;

for (let bulan = 1; bulan <= 12; bulan++) {
    const musimKemarau = bulan >= 6 && bulan <= 8;
    const pemakaian = 150 + bulan * 10 + (musimKemarau ? 100 : 0);
    const tagihan = Math.round(pemakaian * TARIF_PER_KWH);
    
    totalSetahun += tagihan;
    
    if (tagihan > tagihanTertinggi) {
        tagihanTertinggi = tagihan;
        bulanTertinggi = bulan;
    }

    if (tagihan > 350000) {
        jumlahBulanboros += 1;
    }
    
    
    console.log(`Bulan ${bulan} | ${pemakaian} kwh | Rp${tagihan.toLocaleString("id-ID")} | akumulasi Rp${totalSetahun.toLocaleString("id-ID")}`);

}

const rataRata = Math.round(totalSetahun/12);

console.log("------------------------------------");
console.log(`TOTAL SETAHUN : Rp${totalSetahun.toLocaleString("id-ID")}`);
console.log(`Tertinggi       : Bulan ${bulanTertinggi} (Rp${tagihanTertinggi.toLocaleString("id-ID")})`);
console.log(`Bulan Boros : ${jumlahBulanboros} bulan`);
console.log(`RATA-RATA BULAN : ${rataRata.toLocaleString("id-ID")}`);