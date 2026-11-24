const TARIF_PER_KWH = 1444.70;
let totalSetahun = 0;

for (let bulan = 1; bulan <= 12; bulan++) {
    const pemakaian = 150 + bulan * 10;
    const tagihan = Math.round(pemakaian * TARIF_PER_KWH);

    totalSetahun += tagihan;

    console.log(`Bulan ${bulan} | ${pemakaian} kwh | Rp${tagihan.toLocaleString("id-ID")} | akumulasi Rp${totalSetahun.toLocaleString("id-ID")}`);

}

console.log("------------------------------------");
console.log(`TOTAL SETAHUN : Rp${totalSetahun.toLocaleString("id-ID")}`);